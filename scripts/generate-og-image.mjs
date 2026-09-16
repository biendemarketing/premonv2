import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function generateOG() {
  const width = 1200;
  const height = 630;

  const bgPath = path.join(rootDir, 'public', 'slider', 'projet-1.webp');
  const logoPath = path.join(rootDir, 'public', 'logo-premom-blanco.svg');
  const outputPath = path.join(rootDir, 'public', 'og-image.png');
  const appOgPath = path.join(rootDir, 'app', 'opengraph-image.png');

  // 1. Resize hero background to exact OpenGraph canvas
  const bg = await sharp(bgPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  // 2. Render logo in high resolution (white with lime accent)
  const logoWidth = 480;
  const logoSvg = fs.readFileSync(logoPath);
  const renderedLogo = await sharp(logoSvg).resize({ width: logoWidth }).png().toBuffer();

  // 3. SVG overlay for industrial contrast gradient, glow and technical subtitles
  const overlaySvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#040a08" stop-opacity="0.80" />
          <stop offset="50%" stop-color="#091510" stop-opacity="0.82" />
          <stop offset="100%" stop-color="#040a08" stop-opacity="0.92" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="46%" r="45%">
          <stop offset="0%" stop-color="#9fb500" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#091510" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background overlay -->
      <rect width="${width}" height="${height}" fill="url(#gradDark)" />
      <circle cx="600" cy="280" r="380" fill="url(#glow)" />

      <!-- Perimeter industrial frame -->
      <rect x="30" y="30" width="1140" height="570" fill="none" stroke="#9fb500" stroke-opacity="0.35" stroke-width="1.5" />

      <!-- Corner technical crosshairs -->
      <path d="M26,45 L26,26 L45,26" fill="none" stroke="#9fb500" stroke-width="3" />
      <path d="M1174,45 L1174,26 L1155,26" fill="none" stroke="#9fb500" stroke-width="3" />
      <path d="M26,585 L26,604 L45,604" fill="none" stroke="#9fb500" stroke-width="3" />
      <path d="M1174,585 L1174,604 L1155,604" fill="none" stroke="#9fb500" stroke-width="3" />

      <!-- Top badge -->
      <rect x="440" y="85" width="320" height="32" fill="#0f291e" stroke="#9fb500" stroke-opacity="0.4" stroke-width="1" />
      <text x="600" y="106" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#a3e635" text-anchor="middle" letter-spacing="3.5">INGENIERÍA &amp; MONTAJE INDUSTRIAL</text>

      <!-- Subtitle below logo -->
      <text x="600" y="405" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#ffffff" text-anchor="middle" letter-spacing="2">ESTRUCTURAS METÁLICAS • PIPING • SOLDADURA AWS/ASME</text>

      <!-- Location footer -->
      <text x="600" y="455" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#a1a1aa" text-anchor="middle" letter-spacing="2.5">PUNTA CANA – BÁVARO • REPÚBLICA DOMINICANA</text>
    </svg>
  `);

  const logoTop = 230;
  const logoLeft = Math.round((width - logoWidth) / 2);

  const res = await sharp(bg)
    .composite([
      { input: overlaySvg, top: 0, left: 0 },
      { input: renderedLogo, top: logoTop, left: logoLeft }
    ])
    .png({ quality: 95 })
    .toFile(outputPath);

  // Also copy to app/opengraph-image.png
  fs.copyFileSync(outputPath, appOgPath);

  console.log('OpenGraph image generated successfully at:', outputPath, 'and', appOgPath, res);
}

generateOG();
