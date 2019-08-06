import fs from "fs";

import "../utils";
import { ApiAccount } from "../api-accounts";
import { accountDataFilePath, gameDataFilePath } from "../api-file-paths";
import { download, downloadCollection } from "./api-client";

export const downloadToFile = async <T>(
  filePath: string,
  downloadFunc: () => Promise<T>
) => {
  const downloadedData = await downloadFunc();
  fs.writeFileSync(filePath, JSON.stringify(downloadedData));

  console.log(`Updated ${filePath}`);
};

export const writeApiAccountData = (
  apiPath: string,
  account: ApiAccount
): Promise<void> => {
  const filePath = accountDataFilePath(apiPath, account);
  const parameters = { access_token: account.apiKey };
  return downloadToFile(filePath, download.bind(this, apiPath, parameters));
};

export const writeApiGameData = (apiPath: string): Promise<void> => {
  const filePath = gameDataFilePath(apiPath);
  return downloadToFile(filePath, downloadCollection.bind(this, apiPath));
};
