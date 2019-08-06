import { ApiAccount } from "../api-accounts";
import { writeApiGameData, writeApiAccountData } from "./api-file-writer";

export const importGameAchievements = async (): Promise<void> => {
  await Promise.all([
    writeApiGameData("achievements"),
    writeApiGameData("achievements/categories")
  ]);
};

export const importAccountAchievements = (account: ApiAccount): Promise<void> =>
  writeApiAccountData("account/achievements", account);
