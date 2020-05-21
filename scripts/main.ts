import * as fs from "fs";
import * as got from "got";
import * as stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

import { scrapeWiki } from "./scrapeWiki";

async function main() {
  const { civs, techImages } = await scrapeWiki();

  // Write out civ data
  fs.writeFileSync(
    "sources/wiki/data/civs.json",
    JSON.stringify(civs, null, 2)
  );

  if (!fs.existsSync("src/images/techs")) {
    fs.mkdirSync("src/images/techs");
  }

  // Write out images
  let i = 0;
  await Promise.all(
    techImages.map(async ({ name, url }) => {
      const outPath = `src/images/techs/${name}.png`;
      const img = await pipeline(
        got.stream(url),
        fs.createWriteStream(outPath)
      );
      console.log(`downloaded image ${++i} of ${techImages.length}`);
    })
  );
}

main()
  .catch(console.error)
  .then(() => console.log("done"));
