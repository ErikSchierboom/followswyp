import { ApiAccount } from "../api-accounts";
import {
  updateApiGameData,
  updateApiAccountData
} from "../files/api-file-updater";

export const importGameCurrencies = (): Promise<void> =>
  updateApiGameData("currencies");

export const importAccountWallet = (account: ApiAccount): Promise<void> =>
  updateApiAccountData("account/wallet", account);
