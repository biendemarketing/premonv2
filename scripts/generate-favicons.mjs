import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function generateFavicons() {
  const logoPath = path.join(rootDir, 'public', 'logo-premom-negro.svg');
  const logoSvg = fs.readFileSync(logoPath, 'utf8');

  // Extract the stylized 'M' (cls-1) which is PREMOM's signature structural emblem
  const match = logoSvg.match(/<path class="cls-1" d="([^"]+)"\/>/);
  if (!match) {
    throw new Error('Could not find stylized M path in logo');
  }
  const mPath = match[1];

  // Bounding box for M in original SVG: x from 205 to 320, y from 22 to 121
  // Center is (262.5, 71.5), width 115, height 99
  // In a 512x512 canvas, scale = 3.0 gives width=345, height=297
  const scale = 3.0;
  const cx = 262.5;
  const cy = 71.5;
  const targetCx = 256;
  const targetCy = 256;
  const tx = (targetCx - cx * scale).toFixed(2);
  const ty = (targetCy - cy * scale).toFixed(2);

  // 1. Master SVG icon (Scalable vector favicon)
  const masterSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="premBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e2319" />
      <stop offset="50%" stop-color="#091510" />
      <stop offset="100%" stop-color="#040b08" />
    </linearGradient>
    <linearGradient id="premLime" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#bbf451" />
      <stop offset="100%" stop-color="#9fb500" />
    </linearGradient>
  </defs>

  <!-- Industrial Dark Squircle Base -->
  <rect x="12" y="12" width="488" height="488" rx="112" fill="url(#premBg)" />
  <rect x="12" y="12" width="488" height="488" rx="112" fill="none" stroke="#9fb500" stroke-width="5" stroke-opacity="0.4" />

  <!-- Corner Industrial Accent Marks -->
  <path d="M40,70 L40,40 L70,40" fill="none" stroke="#9fb500" stroke-width="4" stroke-opacity="0.6" stroke-linecap="round" />
  <path d="M472,70 L472,40 L442,40" fill="none" stroke="#9fb500" stroke-width="4" stroke-opacity="0.6" stroke-linecap="round" />
  <path d="M40,442 L40,472 L70,472" fill="none" stroke="#9fb500" stroke-width="4" stroke-opacity="0.6" stroke-linecap="round" />
  <path d="M472,442 L472,472 L442,472" fill="none" stroke="#9fb500" stroke-width="4" stroke-opacity="0.6" stroke-linecap="round" />

  <!-- PREMOM Signature Stylized M Structural Truss -->
  <g transform="translate(${tx}, ${ty}) scale(${scale})">
    <path fill="url(#premLime)" d="${mPath}" />
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
  const testFaviconPath = path.join(rootDir, 'public', 'test-favicon.png');
  if (fs.existsSync(testFaviconPath)) {
    fs.unlinkSync(testFaviconPath);
  }

  console.log('All favicons and application icons generated successfully!');
}

generateFavicons();
