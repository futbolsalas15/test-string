import { BracketEntry } from "./interfaces/bracket-entry.interface";

type TypeBrackets = "Round" | "Square" | "Curly" | "Angle";

export const BracketType: Record<TypeBrackets, BracketEntry> = {
  Round: { open: "(", close: ")" },
  Square: { open: "[", close: "]" },
  Curly: { open: "{", close: "}" },
  Angle: { open: "<", close: ">" },
};
