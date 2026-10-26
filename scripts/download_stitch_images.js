const fs = require('fs');
const https = require('https');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve(true);
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', () => {
      fs.unlink(dest, () => {});
      resolve(false);
    });
  });
}

async function main() {
  const files = ['homepage.html', 'about-us.html', 'our-team.html', 'photo-gallery.html', 'contact-us.html'];
  const items = [];
  const seenUrls = new Set();

  files.forEach(f => {
    const html = fs.readFileSync(path.join('./stitch-designs', f), 'utf8');
    const regex = /<img\s+([^>]+)>/g;
    let m;
    while ((m = regex.exec(html)) !== null) {
      const attrs = m[1];
      const srcMatch = attrs.match(/src=["']([^"']+)["']/);
      if (!srcMatch) continue;
      const url = srcMatch[1];
      if (url.includes('cdn.tailwindcss') || seenUrls.has(url)) continue;
      seenUrls.add(url);

      const altMatch = attrs.match(/(?:data-alt|alt)=["']([^"']*)["']/);
      const alt = altMatch ? altMatch[1] : '';

      items.push({
        url,
        alt,
        page: f
      });
    }
  });

  console.log(`Found ${items.length} unique images across Stitch designs.`);
  fs.mkdirSync('./public/images/stitch', { recursive: true });

  for (let i = 0; i < items.length; i++) {
    const ext = items[i].url.includes('logo') ? 'png' : 'jpg';
    const filename = `stitch-${i + 1}.${ext}`;
    const dest = path.join('./public/images/stitch', filename);
    const ok = await download(items[i].url, dest);
    items[i].localPath = ok ? `/images/stitch/${filename}` : items[i].url;
    items[i].filename = filename;
  }

  fs.writeFileSync('./scripts/stitch_images_meta.json', JSON.stringify(items, null, 2));
  console.log('Finished downloading stitch assets!');
}

main();
