import { ApiAccount } from "../api-accounts";
import { writeApiGameData, writeApiAccountData } from "./api-file-writer";

export const importGameCurrencies = (): Promise<void> =>
  writeApiGameData("currencies");

export const importAccountWallet = (account: ApiAccount): Promise<void> =>
  writeApiAccountData("account/wallet", account);
