import { ApiAccount } from "../api-accounts";
import { writeApiGameData, writeApiAccountData } from "./api-file-writer";

export const importGameTitles = (): Promise<void> => writeApiGameData("titles");

export const importAccountTitles = (account: ApiAccount): Promise<void> =>
  writeApiAccountData("account/titles", account);
