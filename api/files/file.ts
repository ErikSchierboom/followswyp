import fs from "fs";
import path from "path";

import "../array";

export const lastModifiedDate = (filePath: string): Date => {
  const stats = fs.statSync(filePath);
  return stats.mtime;
};

export const writeJsonToFile = (filePath: string, data: any): void => {
  const directoryPath = path.dirname(filePath);

  if (!fs.existsSync(directoryPath))
    fs.mkdirSync(directoryPath, { recursive: true });

  fs.writeFileSync(filePath, JSON.stringify(data));
};

export const readJsonFromFile = <T>(filePath: string): T => {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
};
