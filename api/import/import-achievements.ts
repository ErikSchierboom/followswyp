import { ApiAccount } from "../api-accounts";
import {
  updateApiGameData,
  updateApiAccountData
} from "../files/api-file-updater";

export const importGameAchievements = (): Promise<void> =>
  updateApiGameData("achievements");

export const importAccountAchievements = (account: ApiAccount): Promise<void> =>
  updateApiAccountData("account/achievements", account);
