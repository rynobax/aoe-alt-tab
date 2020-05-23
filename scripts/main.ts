import * as fs from "fs";
import * as got from "got";
import * as stream from "stream";
import { promisify } from "util";

const DO_IMAGES = false;

const pipeline = promisify(stream.pipeline);

import { scrapeWiki } from "./scrapeWiki";

async function main(doImages) {
  const { civs, civImages, techImages } = await scrapeWiki();

  // Write out civ data
  fs.writeFileSync(
    "sources/wiki/data/civs.json",
    JSON.stringify(civs, null, 2)
  );

  if (!doImages) return;

  // Write out images
  if (!fs.existsSync("src/images/techs")) {
    fs.mkdirSync("src/images/techs");
  }
  if (!fs.existsSync("src/images/civIcons")) {
    fs.mkdirSync("src/images/civIcons");
  }

  let i = 0;
  await Promise.all(
    techImages.map(async ({ name, url }) => {
      const outPath = `src/images/techs/${name}.png`;
      await pipeline(got.stream(url), fs.createWriteStream(outPath));
      console.log(`downloaded tech image ${++i} of ${techImages.length}`);
    })
  );
  await Promise.all(
    civImages.map(async ({ name, url }) => {
      const outPath = `src/images/civIcons/${name}.png`;
      await pipeline(got.stream(url), fs.createWriteStream(outPath));
      console.log(`downloaded civ image ${++i} of ${techImages.length}`);
    })
  );
}

main(DO_IMAGES)
  .catch(console.error)
  .then(() => console.log("done"));
