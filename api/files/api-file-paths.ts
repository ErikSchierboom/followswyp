import path from "path";
import { ApiAccount } from "../api-accounts";

export const dataDirectory = path.join(__dirname, "..", "data");
export const accountsDataDirectory = path.join(dataDirectory, "accounts");
export const gameDataDirectory = path.join(dataDirectory, "game");

const apiPathToFileName = (apiPath: string): string =>
  `${apiPath.replace("/", "-")}.json`;

export const accountDataFilePath = (
  apiPath: string,
  account: ApiAccount
): string =>
  path.join(accountsDataDirectory, account.owner, apiPathToFileName(apiPath));

export const gameDataFilePath = (apiPath: string): string =>
  path.join(gameDataDirectory, apiPathToFileName(apiPath));
