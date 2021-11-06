import { areThereMatchingBrackets } from "./are-there-matching-brackets";
import { BracketType } from "../constants";

export function areTherePairingCurlyBrackets(text: string) {
  return areThereMatchingBrackets(text, BracketType.Curly);
}
