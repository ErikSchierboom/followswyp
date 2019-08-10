import { ApiAccount } from "../api-accounts";
import {
  updateApiGameData,
  updateApiAccountData
} from "../files/api-file-updater";

export const importGameTitles = (): Promise<void> =>
  updateApiGameData("titles");

export const importAccountTitles = (account: ApiAccount): Promise<void> =>
  updateApiAccountData("account/titles", account);
