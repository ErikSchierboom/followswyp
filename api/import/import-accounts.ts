import { ApiAccount, accounts } from "../api-accounts";
import { importAccountWallet } from "./import-wallet";
import { importAccountTitles } from "./import-titles";
import { importAccountAchievements } from "./import-achievements";
import { importAccountCharacter } from "./import-characters";

const importAccount = async (account: ApiAccount): Promise<void> => {
  await Promise.all([
    importAccountCharacter(account),
    importAccountAchievements(account),
    importAccountWallet(account),
    importAccountTitles(account)
  ]);
};

export const importAccounts = async (): Promise<void> => {
  console.log("import accounts");
  await Promise.all(accounts.map(importAccount));
};
