const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function enhanceTo4K() {
  const heroDir = path.join(__dirname, '../public/images/hero');
  const backupDir = path.join(heroDir, 'backup');
  fs.mkdirSync(backupDir, { recursive: true });

  const files = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg', 'hero4.jpg'];

  for (const file of files) {
    const srcPath = path.join(heroDir, file);
    const backupPath = path.join(backupDir, file);

    // Save backup if not already saved
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(srcPath, backupPath);
    }

    console.log(`Enhancing ${file} to 4K UHD (3840x2160)...`);

    // Multi-stage high-clarity processing
    const inputBuffer = fs.readFileSync(backupPath);

    await sharp(inputBuffer)
      // 1. Upscale to 4K resolution using Lanczos3 interpolation
      .resize(3840, 2160, {
        fit: 'cover',
        position: 'center',
        kernel: sharp.kernel.lanczos3
      })
      // 2. High-frequency unsharp mask to restore crisp contours and architectural edges
      .sharpen({
        sigma: 2.0,
        m1: 1.6,
        m2: 3.0,
        x1: 2.0,
        y2: 12.0,
        y3: 25.0
      })
      // 3. Modulate lighting, contrast, and vibrant collegiate colors
      .modulate({
        brightness: 1.05,
        saturation: 1.18,
      })
      // 4. Subtle linear contrast enhancement to eliminate haziness/fogginess
      .linear(1.08, -6)
      // 5. Studio-grade 4:4:4 uncompressed chroma JPEG at 96% quality
      .jpeg({
        quality: 96,
        chromaSubsampling: '4:4:4',
        mozjpeg: true
      })
      .toFile(srcPath);

    const stats = fs.statSync(srcPath);
    console.log(`✓ ${file} enhanced! New size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  }

  console.log('All hero photos successfully enhanced to 4K resolution!');
}

enhanceTo4K().catch(err => {
  console.error('Enhancement error:', err);
});
