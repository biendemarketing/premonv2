import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDirs = [
  path.join(process.cwd(), 'public', 'slider'),
  path.join(process.cwd(), 'public', 'projects'),
  path.join(process.cwd(), 'src', 'assets', 'images'),
];

async function convertDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory does not exist: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertDirectory(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dirPath, `${baseName}.webp`);

      const originalSize = stat.size;
      console.log(`Converting ${file} (${(originalSize / (1024 * 1024)).toFixed(2)} MB)...`);

      try {
        await sharp(fullPath)
          .webp({ quality: 82, effort: 4 })
          .toFile(webpPath);

        const newStat = fs.statSync(webpPath);
        const newSize = newStat.size;
        const savedPercent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

        console.log(`  -> Generated ${baseName}.webp: ${(newSize / 1024).toFixed(1)} KB (Saved ${savedPercent}%)`);

        // Remove the original heavy file
        fs.unlinkSync(fullPath);
        console.log(`  -> Deleted heavy original: ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

async function main() {
  console.log('--- Starting WebP Image Conversion & Optimization ---');
  for (const dir of targetDirs) {
    console.log(`Processing folder: ${dir}`);
    await convertDirectory(dir);
  }
  console.log('--- Finished WebP Conversion & Cleanup Successfully ---');
}

main().catch(console.error);
