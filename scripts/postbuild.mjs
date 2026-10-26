import { writeFile } from 'node:fs/promises';
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
await writeFile('out/.nojekyll', '');
for (const slug of ['chat-pilot', 'hrm']) {
  const target = `${base}/products/${slug}/`;
  await writeFile(`out/${slug}.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${target}"><title>Opening product | Solution Store</title></head><body><p>This product has a new home. <a href="${target}">Open product page</a>.</p><script>location.replace(${JSON.stringify(target)}+location.hash)</script></body></html>`);
}
console.log('Created GitHub Pages metadata and backward-compatible product links.');
