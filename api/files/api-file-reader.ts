import { ApiAccount } from "../api-accounts";
import { ApiElement } from "../types/api";
import { accountDataFilePath, gameDataFilePath } from "./api-file-paths";
import { readJsonFromFile } from "./file";

const indexApiElementArrayById = <T extends ApiElement>(collection: T[]): T[] =>
  collection.reduce((mapped, element) => {
    mapped[element.id] = element;
    return mapped;
  }, []);

export const readApiAccountData = <T>(
  fileName: string,
  account: ApiAccount
): T => readJsonFromFile<T>(accountDataFilePath(fileName, account));

export const readApiGameData = <T extends ApiElement>(
  fileName: string
): T[] => {
  const data = readJsonFromFile<T[]>(gameDataFilePath(fileName));
  return indexApiElementArrayById(data);
};
