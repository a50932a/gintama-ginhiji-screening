import { readFile, writeFile } from "node:fs/promises";

const output = new URL("../netlify-dist/github-pages.html", import.meta.url);
const html = await readFile(new URL("../netlify-dist/index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../netlify-dist/style.css", import.meta.url), "utf8");
const assets = [
  "mayo-bottle-web.webp",
  "uji-bowl-web.webp",
  "special-bowl-web.webp",
  "hero-character-left.webp",
  "hero-character-right.webp",
  "schedule-float-left.webp",
  "schedule-float-right.webp",
  "seat-decoration.webp",
  "contact-decoration.webp",
  "bonus-gift.jpg",
];

let standalone = html.replace(
  /\s*<link rel="stylesheet" href="style\.css">/u,
  `\n    <style>${css}</style>`,
);

for (const asset of assets) {
  const bytes = await readFile(new URL(`../public/${asset}`, import.meta.url));
  const mimeType = asset.endsWith(".jpg") ? "image/jpeg" : "image/webp";
  standalone = standalone.replaceAll(asset, `data:${mimeType};base64,${bytes.toString("base64")}`);
}

await writeFile(output, standalone);
console.log(`GitHub Pages bundle created: ${output.pathname}`);
