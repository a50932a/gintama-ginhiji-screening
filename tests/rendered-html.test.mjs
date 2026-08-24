import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete event information site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>銀土包場｜事前說明所<\/title>/i);
  assert.match(html, />銀土包場</);
  assert.match(html, />包場資訊</);
  assert.match(html, />注意事項</);
  assert.match(html, />地點指南</);
  assert.match(html, />當天流程</);
  assert.match(html, />座位表</);
  assert.match(html, />感謝名單 &amp; 主辦名單</);
  assert.match(html, />聯絡資訊</);
});

test("keeps the published event details and links", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /2026\.09\.12 SUN/);
  assert.match(html, /桃園市桃園區中正路61號9樓/);
  assert.match(html, /以報名資訊現場兌換實體票券/);
  assert.match(html, /來場特典/);
  assert.match(html, /包場籌備組-草凡/);
  assert.match(html, /grassrabbit1214@gmail\.com/);
  assert.match(html, /threads\.com\/@kusabon1214/);
  assert.match(html, /plurk\.com\/grassrabbit_1214/);
  assert.match(html, />1005</);
});

test("renders all published illustration assets", async () => {
  const response = await render();
  const html = await response.text();
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
    "credits-list.png",
  ];

  for (const asset of assets) {
    assert.match(html, new RegExp(asset.replace(".", "\\.")));
  }
});
