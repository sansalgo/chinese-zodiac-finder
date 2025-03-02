import { zodiacSigns } from "../data/zodiac-data";

export type ZodiacSigns = (typeof zodiacSigns)[number];

export interface ZodiacData {
  sign: string;
  traits: string[];
  element: string;
  yin_yang: string;
  compatibility: {
    best_matches: string[];
    least_matches: string[];
  };
  lucky_aspects: {
    numbers: number[];
    colors: string[];
    flowers: string[];
    directions: string[];
  };
}
