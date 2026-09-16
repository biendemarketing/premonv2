import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function generateFavicons() {
  const logoPath = path.join(rootDir, 'public', 'logo-cloudinary.svg');
  const logoSvg = fs.readFileSync(logoPath, 'utf8');

  // Extract all path elements and ensure fills are explicit
  const rawPaths = logoSvg.match(/<path[^>]+>/g);
  if (!rawPaths || rawPaths.length === 0) {
    throw new Error('Could not find paths in logo');
  }

  // Ensure explicit inline fills for bulletproof SVG rendering
  const paths = rawPaths.map(p => {
    if (p.includes('class="cls-1"')) {
      return p.replace('class="cls-1"', 'fill="#9fb500"');
    }
    if (p.includes('class="cls-2"')) {
      return p.replace('class="cls-2"', 'fill="#060606"');
    }
    return p;
  });

  // Original logo viewBox is 527 x 127
  // On a 512x512 square canvas, we center the entire PREMOM logo horizontally and vertically
  const targetLogoWidth = 472; // leaves balanced margin on left and right
  const scale = targetLogoWidth / 527; // ~0.8956
  const targetLogoHeight = 127 * scale; // ~113.75
  const tx = (512 - targetLogoWidth) / 2; // 20
  const ty = (512 - targetLogoHeight) / 2; // ~199.12

  // 1. Master SVG icon (Scalable vector favicon with complete logo)
  // Clean white rounded container so the black letters (#060606) and lime M (#9fb500)
  // are 100% visible, sharp, and high-contrast in both light and dark browser themes
  const masterSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <style>
      .cls-1 { fill: #9fb500; }
      .cls-2 { fill: #060606; }
    </style>
  </defs>
  <!-- Clean high-contrast white rounded background card -->
  <rect width="512" height="512" rx="100" fill="#ffffff" />
  <rect x="4" y="4" width="504" height="504" rx="96" fill="none" stroke="#e2e8f0" stroke-width="4" />

  <!-- Complete PREMOM logo centered -->
  <g transform="translate(${tx.toFixed(2)}, ${ty.toFixed(2)}) scale(${scale.toFixed(4)})">
    ${paths.join('\n    ')}
  </g>
</svg>`;

  // Save SVG icon to public and app directories
  fs.writeFileSync(path.join(rootDir, 'public', 'icon.svg'), masterSvg);
  fs.writeFileSync(path.join(rootDir, 'app', 'icon.svg'), masterSvg);

  // 2. High-res 512x512 Master PNG
  const masterBuf = await sharp(Buffer.from(masterSvg))
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(path.join(rootDir, 'public', 'icon-512.png'), masterBuf);

  // 3. 192x192 PNG for Android/PWA
  const png192 = await sharp(masterBuf).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'icon-192.png'), png192);

  // 4. 180x180 PNG for Apple Touch Icon
  const appleTouch = await sharp(masterBuf).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), appleTouch);
  fs.writeFileSync(path.join(rootDir, 'app', 'apple-icon.png'), appleTouch);

  // 5. 32x32 Standard PNG icon
  const png32 = await sharp(masterBuf).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'icon.png'), png32);

  // 6. Multi-resolution favicon.ico (16, 32, 48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of icoSizes) {
    const buf = await sharp(masterBuf).resize(size, size).png().toBuffer();
    pngBuffers.push({ size, buf });
  }

  // ICO Header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(icoSizes.length, 4); // Count

  let offset = 6 + icoSizes.length * 16;
  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size, 0); // Width
    entry.writeUInt8(item.size, 1); // Height
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buf.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    offset += item.buf.length;
    entries.push(entry);
  }

  const icoBuf = Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buf)]);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(rootDir, 'app', 'favicon.ico'), icoBuf);

  // Clean up any test artifact
  const testFiles = [
    'test-favicon.png',
    'test-opt1-white.png',
    'test-opt2-dark.png',
    'test-opt3-direct.png',
    'test-full-512.png',
    'test-full-32.png'
  ];
  for (const f of testFiles) {
    const p = path.join(rootDir, 'public', f);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  console.log('All favicons and application icons generated with the COMPLETE PREMOM logo successfully!');
}

generateFavicons();
