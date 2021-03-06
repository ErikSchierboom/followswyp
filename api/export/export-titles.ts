import { readApiGameData, readApiAccountData } from "../files/api-file-reader";
import { ApiTitle, ApiAccountTitle } from "../types/titles";
import { ApiAccount } from "../api-accounts";
import { memoize } from "../memoize";

const gameTitles = memoize(() => readApiGameData<ApiTitle>("titles"));

export const accountTitles = (account: ApiAccount): string[] => {
  const accountTitles = readApiAccountData<ApiAccountTitle[]>(
    "account-titles",
    account
  );

  return accountTitles
    .map(id => gameTitles()[id])
    .map(accountTitle => (accountTitle ? accountTitle.name : "Unknown"));
};
