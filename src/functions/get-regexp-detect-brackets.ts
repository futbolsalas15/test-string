import { BracketEntry } from "../interfaces/bracket-entry.interface";

export function getRegexpDetectBrackets({ open, close }: BracketEntry) {
  return new RegExp(`\\${open}([^\\${open}\\${close}]*?)\\${close}`);
}
