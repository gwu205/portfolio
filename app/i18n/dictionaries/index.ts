import { Locale } from "../locales";
import { en } from "./en";
import { ja } from "./ja";
import { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
