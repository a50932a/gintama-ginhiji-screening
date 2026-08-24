import { build } from "esbuild";
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";

const outputDirectory = new URL("../netlify-dist/", import.meta.url);
const compiledPage = new URL("../.netlify-page.mjs", import.meta.url);

await mkdir(outputDirectory, { recursive: true });

await build({
  entryPoints: [fileURLToPath(new URL("../app/page.tsx", import.meta.url))],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: fileURLToPath(compiledPage),
});

const { default: Page } = await import(`${pathToFileURL(fileURLToPath(compiledPage))}?v=${Date.now()}`);
const body = renderToStaticMarkup(Page());
const sourceCss = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const staticCss = sourceCss.replace(/^@import\s+"tailwindcss";\s*/u, "");

const html = `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#7cc9e5">
    <title>銀土包場｜事前說明所</title>
    <meta name="description" content="銀魂銀土 CP 向包場事前說明：包場資訊、注意事項、地點指南、當天流程、座位表與聯絡方式。">
    <meta property="og:title" content="銀土包場｜事前說明所">
    <meta property="og:description" content="銀魂銀土 CP 向包場事前說明。">
    <meta property="og:type" content="website">
    <meta property="og:image" content="og.png">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700;800;900&amp;family=Noto+Serif+TC:wght@600;700;800;900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>${body}</body>
</html>
`;

await writeFile(new URL("index.html", outputDirectory), html);
await writeFile(new URL("style.css", outputDirectory), staticCss);
await copyFile(new URL("../public/og.png", import.meta.url), new URL("og.png", outputDirectory));
await Promise.all([
  copyFile(new URL("../public/mayo-bottle-web.webp", import.meta.url), new URL("mayo-bottle-web.webp", outputDirectory)),
  copyFile(new URL("../public/uji-bowl-web.webp", import.meta.url), new URL("uji-bowl-web.webp", outputDirectory)),
  copyFile(new URL("../public/special-bowl-web.webp", import.meta.url), new URL("special-bowl-web.webp", outputDirectory)),
  copyFile(new URL("../public/hero-character-left.webp", import.meta.url), new URL("hero-character-left.webp", outputDirectory)),
  copyFile(new URL("../public/hero-character-right.webp", import.meta.url), new URL("hero-character-right.webp", outputDirectory)),
  copyFile(new URL("../public/schedule-float-left.webp", import.meta.url), new URL("schedule-float-left.webp", outputDirectory)),
  copyFile(new URL("../public/schedule-float-right.webp", import.meta.url), new URL("schedule-float-right.webp", outputDirectory)),
  copyFile(new URL("../public/seat-decoration.webp", import.meta.url), new URL("seat-decoration.webp", outputDirectory)),
  copyFile(new URL("../public/contact-decoration.webp", import.meta.url), new URL("contact-decoration.webp", outputDirectory)),
  copyFile(new URL("../public/bonus-gift.jpg", import.meta.url), new URL("bonus-gift.jpg", outputDirectory)),
]);
await writeFile(new URL("_headers", outputDirectory), "/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n");
await rm(compiledPage, { force: true });

console.log(`Netlify bundle created: ${outputDirectory.pathname}`);
