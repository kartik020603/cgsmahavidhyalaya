const fs = require('fs');
const https = require('https');
const path = require('path');

const files = ['homepage.html', 'about-us.html', 'our-team.html', 'photo-gallery.html', 'contact-us.html'];
const allUrls = new Set();
const urlMapping = {};

files.forEach(f => {
  const html = fs.readFileSync(path.join('./stitch-designs', f), 'utf8');
  const regex = /src=["'](https:\/\/lh3\.googleusercontent\.com\/[^"']+)["']/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    allUrls.add(match[1]);
  }
});

console.log('Total unique LH3 images:', allUrls.size);
Array.from(allUrls).forEach((url, i) => {
  console.log(`[${i}] ${url.substring(0, 75)}...`);
});
