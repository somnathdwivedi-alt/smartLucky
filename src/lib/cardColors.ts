export type CardColor =
  | "blue" | "violet" | "emerald" | "orange" | "rose" | "cyan"
  | "amber" | "indigo" | "teal" | "pink" | "lime" | "sky";

const colorOrder: CardColor[] = [
  "blue", "violet", "emerald", "orange", "rose", "cyan",
  "amber", "indigo", "teal", "pink", "lime", "sky",
];

export function getCardColor(index: number): CardColor {
  return colorOrder[index % colorOrder.length];
}
