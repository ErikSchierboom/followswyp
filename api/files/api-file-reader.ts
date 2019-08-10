import fs from "fs";

import { ApiAccount } from "../api-accounts";
import { ApiElement } from "../types/api";
import { accountDataFilePath, gameDataFilePath } from "./api-file-paths";

const indexApiElementArrayById = <T extends ApiElement>(collection: T[]): T[] =>
  collection.reduce((mapped, element) => {
    mapped[element.id] = element;
    return mapped;
  }, []);

const readApiDataFromFile = <T>(filePath: string): T => {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
};

export const readApiAccountData = <T>(
  fileName: string,
  account: ApiAccount
): T => readApiDataFromFile<T>(accountDataFilePath(fileName, account));

export const readApiGameData = <T extends ApiElement>(
  fileName: string
): T[] => {
  const data = readApiDataFromFile<T[]>(gameDataFilePath(fileName));
  return indexApiElementArrayById(data);
};
