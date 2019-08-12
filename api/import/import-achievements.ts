import { ApiAccount } from "../api-accounts";
import {
  updateApiGameData,
  updateApiAccountData
} from "../files/api-file-updater";

export const importGameAchievements = async (): Promise<void> => {
  await Promise.all([
    updateApiGameData("achievements"),
    updateApiGameData("achievements/categories")
  ]);
};

export const importAccountAchievements = (account: ApiAccount): Promise<void> =>
  updateApiAccountData("account/achievements", account);
