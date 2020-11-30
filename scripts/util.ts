import * as _ from "lodash";

export const nameForWiki = (str: string) => _.capitalize(str.toLowerCase());

export const nameForWikiNonAvailableStyle = (str: string) =>
  _.kebabCase(str)
    .split("-")
    .map((s) => _.capitalize(s))
    .join(" ");
