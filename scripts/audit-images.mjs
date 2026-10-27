import fs from 'node:fs';
import sharp from 'sharp';

(async () => {
  const files = fs.readdirSync('public/images');
  const tiles = [];
  const metadata = [];
  for (const [i, file] of files.entries()) {
    const path = `public/images/${file}`;
    const { width, height } = await sharp(path).metadata();
    metadata.push({ file, width, height, bytes: fs.statSync(path).size });
    tiles.push({ input: await sharp(path).resize(210, 170, { fit: 'contain', background: '#eee' }).extend({ bottom: 26, background: '#fff' }).png().toBuffer(), left: (i % 5) * 210, top: Math.floor(i / 5) * 196 });
    tiles.push({ input: Buffer.from(`<svg width="210" height="26"><text x="8" y="18" font-size="14">${file} ${width}x${height}</text></svg>`), left: (i % 5) * 210, top: Math.floor(i / 5) * 196 + 170 });
  }
  fs.mkdirSync('output/image-audit', { recursive: true });
  fs.writeFileSync('output/image-audit/sources.json', JSON.stringify(metadata, null, 2));
  await sharp({ create: { width: 1050, height: Math.ceil(files.length / 5) * 196, channels: 3, background: '#fff' } }).composite(tiles).png().toFile('output/image-audit/contact-sheet.png');
  console.log(metadata);
})();
