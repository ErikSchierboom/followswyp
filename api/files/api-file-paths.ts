import path from "path";
import { ApiAccount } from "../api-accounts";

const dataDirectory = path.join(__dirname, "data");
const accountsDataDirectory = path.join(dataDirectory, "accounts");
const gameDataDirectory = path.join(dataDirectory, "game");

const apiPathToFileName = (apiPath: string): string =>
  `${apiPath.replace("/", "-")}.json`;

export const accountDataFilePath = (
  apiPath: string,
  account: ApiAccount
): string =>
  path.join(accountsDataDirectory, account.owner, apiPathToFileName(apiPath));

export const gameDataFilePath = (apiPath: string): string =>
  path.join(gameDataDirectory, apiPathToFileName(apiPath));
