import { BracketEntry } from "../interfaces/bracket-entry.interface";
import { getRegexpDetectBrackets } from "./get-regexp-detect-brackets";

export function areThereMatchingBrackets(
  text: string,
  bracketType: BracketEntry,
  debug: boolean = false
) {
  const regexpDetectMatchingBrackets = getRegexpDetectBrackets(bracketType);
  let matches,
    textRemaining = text;

  while (
    (matches = regexpDetectMatchingBrackets.exec(textRemaining)) !== null
  ) {
    textRemaining = textRemaining.replace(matches[0], "");

    if (debug) {
      console.log("matches: %s, text remaining: %s", matches[0], textRemaining);
    }
  }

  if (textRemaining.includes(bracketType.open)) {
    return false;
  }

  return true;
}
