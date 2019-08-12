import "../array";
import { ApiAccount } from "../api-accounts";
import {
  accountDataFilePath,
  gameDataFilePath,
  dataDirectory
} from "./api-file-paths";
import { download, downloadCollection } from "../import/api-client";
import { writeJsonToFile } from "./file";
import { fileHasExpired } from "./api-file-cache";

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;

const ACCOUNT_DATA_LIFETIME = SECONDS_PER_MINUTE * 5;
const GAME_DATA_LIFETIME = SECONDS_PER_DAY * 1;

const updateApiData = async (
  filePath: string,
  download: () => Promise<void>,
  lifetimeInSeconds: number
): Promise<void> => {
  if (fileHasExpired(filePath, lifetimeInSeconds)) {
    const data = await download();
    writeJsonToFile(filePath, data);

    console.log(`Updated ${filePath.replace(dataDirectory, "")}`);
  } else {
    console.log(`Skipped ${filePath.replace(dataDirectory, "")}`);
  }
};

export const updateApiAccountData = (
  apiPath: string,
  account: ApiAccount
): Promise<void> =>
  updateApiData(
    accountDataFilePath(apiPath, account),
    download.bind(this, apiPath, { access_token: account.apiKey }),
    ACCOUNT_DATA_LIFETIME
  );

export const updateApiGameData = (apiPath: string): Promise<void> =>
  updateApiData(
    gameDataFilePath(apiPath),
    downloadCollection.bind(this, apiPath, {}),
    GAME_DATA_LIFETIME
  );
