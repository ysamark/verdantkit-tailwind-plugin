import { shade } from "polished";

type Colors = {
  [tone: number]: string;
};

export const colors = (color: string): Colors => {
  const tones = [
    50,
    ...Array.from({ length: 9 }).map((_, level) => (level + 1) * 100),
  ];

  const colors: Colors = {};

  for (const tone of tones) {
    colors[tone] = shade(tone / 1000, color);
  }

  return colors;
};
