const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploads = [
  { name: 'hero1.jpg', src: 'C:/Users/user/.gemini/antigravity/brain/1f4bb316-8e54-4bff-b050-bad922f7494d/.user_uploaded/media_1793042618709_39c07ca9.jpg' },
  { name: 'hero2.jpg', src: 'C:/Users/user/.gemini/antigravity/brain/1f4bb316-8e54-4bff-b050-bad922f7494d/.user_uploaded/media_1793042618751_d03f46fe.jpg' },
  { name: 'hero3.jpg', src: 'C:/Users/user/.gemini/antigravity/brain/1f4bb316-8e54-4bff-b050-bad922f7494d/.user_uploaded/media_1793042618768_4a026d6a.jpg' },
  { name: 'hero4.jpg', src: 'C:/Users/user/.gemini/antigravity/brain/1f4bb316-8e54-4bff-b050-bad922f7494d/.user_uploaded/media_1793042618795_b87a0276.jpg' },
];

async function processNewHeroes() {
  const heroDir = path.join(__dirname, '../public/images/hero');
  const rootImagesDir = path.join(__dirname, '../public/images');
  const galleryDir = path.join(__dirname, '../public/images/gallery');

  for (let i = 0; i < uploads.length; i++) {
    const item = uploads[i];
    const destHero = path.join(heroDir, item.name);
    const destRoot = path.join(rootImagesDir, item.name);
    const destGallery = path.join(galleryDir, item.name);

    console.log(`Processing [Slide ${i + 1}] ${item.name} to 4K UHD...`);

    const inputBuffer = fs.readFileSync(item.src);

    await sharp(inputBuffer)
      // 1. Upscale to 4K UHD width (3840x1920 / 16:9 3840x2160)
      .resize(3840, 2160, {
        fit: 'cover',
        position: 'center',
        kernel: sharp.kernel.lanczos3
      })
      // 2. High-precision unsharp mask for crystal clear buildings, faces, and trees
      .sharpen({
        sigma: 1.8,
        m1: 1.5,
        m2: 2.8,
        x1: 2.0,
        y2: 12.0,
        y3: 25.0
      })
      // 3. Natural brightness & vibrant contrast
      .modulate({
        brightness: 1.04,
        saturation: 1.15,
      })
      .linear(1.06, -5)
      // 4. Studio 4:4:4 chroma JPEG
      .jpeg({
        quality: 96,
        chromaSubsampling: '4:4:4',
        mozjpeg: true
      })
      .toFile(destHero);

    // Also copy to root and gallery
    fs.copyFileSync(destHero, destRoot);
    fs.copyFileSync(destHero, destGallery);

    const stats = fs.statSync(destHero);
    console.log(`✓ Slide ${i + 1} (${item.name}) saved! Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  }

  console.log('All 4 new hero images processed and replaced successfully!');
}

processNewHeroes().catch(err => {
  console.error('Error processing hero images:', err);
});
