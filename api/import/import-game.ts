import { importGameTitles } from "./import-titles";
import { importGameAchievements } from "./import-achievements";
import { importGameCurrencies } from "./import-wallet";

export const importGame = async (): Promise<void> => {
  await Promise.all([
    importGameCurrencies(),
    importGameTitles(),
    importGameAchievements()
  ]);
};
