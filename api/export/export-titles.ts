import { readApiGameData, readApiAccountData } from "./api-file-reader";
import { ApiTitle, ApiAccountTitle } from "../types/titles";
import { ApiAccount } from "../api-accounts";

const gameTitles = readApiGameData<ApiTitle>("titles");

export const accountTitles = (account: ApiAccount): string[] => {
  const accountTitles = readApiAccountData<ApiAccountTitle[]>(
    "account-titles",
    account
  );

  return accountTitles.map(id => gameTitles[id].name);
};
