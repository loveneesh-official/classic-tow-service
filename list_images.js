const fs = require('fs');

const files = fs.readdirSync('.').filter(f => {
  const ext = f.split('.').pop().toLowerCase();
  return ['png', 'jpg', 'jpeg'].includes(ext);
});

files.forEach(f => {
  const stat = fs.statSync(f);
  console.log(`${f} (${(stat.size / 1024).toFixed(1)} KB)`);
});
