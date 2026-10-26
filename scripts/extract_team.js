const fs = require('fs');
const html = fs.readFileSync('./stitch-designs/our-team.html', 'utf8');

['prabandhak', 'ranjni', 'virat'].forEach(id => {
  const re = new RegExp('<section[^>]*id="' + id + '"[\\s\\S]*?<\\/section>');
  const m = html.match(re);
  if (m) {
    const text = m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('=== ' + id + ' ===');
    console.log(text.substring(0, 500));
  }
});
