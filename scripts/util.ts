import * as _ from "lodash";

export const namesForWiki = (str: string) => {
  if (str === "wingedHussar") return ["Winged_Hussar.png", "Wingedhussar"];
  return [_.capitalize(str.toLowerCase())];
};

export const nameForWikiNonAvailableStyle = (str: string) =>
  _.kebabCase(str)
    .split("-")
    .map((s) => _.capitalize(s))
    .join(" ");
