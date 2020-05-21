import * as fs from "fs";

import { scrapeWiki } from "./scrapeWiki";

async function main() {
  const { civs, techImages } = await scrapeWiki();

  // Write out civ data
  fs.writeFileSync(
    "sources/wiki/data/civs.json",
    JSON.stringify(civs, null, 2)
  );

  // Write out images
  techImages.forEach(({ name, url }) => {
    
  });
}

main()
  .catch(console.error)
  .then(() => console.log("done"));
