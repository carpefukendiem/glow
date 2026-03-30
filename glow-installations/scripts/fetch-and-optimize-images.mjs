/**
 * Downloads live Webflow CDN assets and writes optimized WebP to public/images.
 * Run: node scripts/fetch-and-optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import sharp from "sharp";

const root = path.join(process.cwd(), "public", "images");
fs.mkdirSync(root, { recursive: true });

const jobs = [
  {
    url: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1920&q=85&fm=webp",
    out: "hero-home-christmas-lights.webp",
    resize: 1920,
    quality: 85,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66790d025123e922b5a0f7eb_jimmy-conover-fyEin27bHZ8-unsplash-Smaler.jpg",
    out: "residential-hero.webp",
    resize: 1600,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66790d08f6b14715f40f5f7e_juliana-malta-NH7oHjePWUs-unsplash.jpg",
    out: "residential-family.webp",
    resize: 1200,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6679180578e62421afc8a6ee_thalia-ruiz-lHu6SF2Uar0-unsplash.jpg",
    out: "residential-lights-detail.webp",
    resize: 1200,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a42430cc4c6e719defd8_96in-LED-Sequoia-Wreath-PMDisplay-07255-edit.jpg",
    out: "commercial-wreath-display.webp",
    resize: 1400,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a4359b9dbc5deb3e9dcd_M5-LED-WW-twinkle-Icicle-Lights-Roofline-6382.jpg",
    out: "commercial-icicle-roofline.webp",
    resize: 1600,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2a48e8bc07952f9f83eb6_Wintergreen-Commercial-Trees-Brochure_12.jpg",
    out: "commercial-trees.webp",
    resize: 1600,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff5069352b9d932081fd6a_96in-LED-Sequoia-Wreath-PMDisplay-07266.jpg",
    out: "gallery-sequoia-wreath-large.webp",
    resize: 800,
    quality: 75,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff506943aabdc76e1d116f_sequoia-lifestyle-LED-24inch-3.jpg",
    out: "gallery-sequoia-lifestyle.webp",
    resize: 800,
    quality: 75,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff506958bdd9f9b44b38c1_24in-LED-Sequoia-Wreath-Fence-00494.jpg",
    out: "gallery-fence-wreath.webp",
    resize: 800,
    quality: 75,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/66ff5069dd07492f0ca3f399_LED-Warm-White-5MM-Brown-Wire-Trunk-Wrap-02.jpg",
    out: "gallery-trunk-wrap.webp",
    resize: 800,
    quality: 75,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e2aa891f4ee7c377b2d98e_LED-Column-Wrap-StretchNet-CW-White-Wire-01824.jpg",
    out: "single-story-column.webp",
    resize: 1400,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e29b3cc7fae07ea779756f_24in-LED-Sequoia-Wreath-Fence-00494.jpg",
    out: "estates-fence.webp",
    resize: 1400,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e29938901069436b3021cb_sequoia-lifestyle-LED-24inch-3.jpg",
    out: "multi-story-lifestyle.webp",
    resize: 1400,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66e297d1f4402c4e44757f07_sequoia-lifestyle-LED-48inch.jpg",
    out: "ranch-sequoia-48.webp",
    resize: 1400,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/667917a33350139f176f46d8_kenny-eliason-A59lWOrZVnw-unsplash.jpg",
    out: "restaurant-interior.webp",
    resize: 1600,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ecb855536f55/644f63224feacc142012e140_steven-van-elk-6yiGt1PpPcQ-unsplash.jpg",
    out: "estate-night-display.webp",
    resize: 800,
    quality: 75,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/68d04f067a6cbec1fe06201b_Stunning%20Halloween%20Display%20Installation%202024%20In%20Santa%20Ynez%20-%20Lisa%20R.jpg",
    out: "review-project-lisa.webp",
    resize: 900,
    quality: 80,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66f469871bff855b6c0bc858_IMG_20240925_084859.jpg",
    out: "review-project-mike.webp",
    resize: 900,
    quality: 80,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/66f63de178d9bf36e6f01218_2024-01-20.jpg",
    out: "review-project-serena.webp",
    resize: 900,
    quality: 80,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/68d0ef36154cca5f96ab998a_Amazing%20Christmas%20Installation%20in%20Old%20Orcutt%202024%20-%20Nathalie%20A.JPG",
    out: "review-project-nathalie.webp",
    resize: 900,
    quality: 80,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6538ca9c1a41e3c2f89532eb_Alex_small.png",
    out: "team-alex-nava.webp",
    resize: 640,
    quality: 82,
  },
  {
    url: "https://cdn.prod.website-files.com/6427e3cc6a10ec75ae536f70/6538caa6a3276a7a6a6f1b75_Zuar_small.png",
    out: "team-zuar-mendoza.webp",
    resize: 640,
    quality: 82,
  },
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "GlowInstallationsImageSync/1.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const loc = res.headers.location;
          if (!loc) {
            reject(new Error("Redirect without location"));
            return;
          }
          fetchBuffer(new URL(loc, url).href).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function run() {
  for (const job of jobs) {
    const dest = path.join(root, job.out);
    process.stdout.write(`Fetching ${job.out}... `);
    try {
      const buf = await fetchBuffer(job.url);
      let pipeline = sharp(buf).rotate();
      if (job.resize) {
        pipeline = pipeline.resize(job.resize, null, {
          withoutEnlargement: true,
          fit: "inside",
        });
      }
      await pipeline.webp({ quality: job.quality }).toFile(dest);
      console.log("ok");
    } catch (e) {
      console.error("FAIL", e.message);
    }
  }
  console.log("Done.");
}

run();
