import path from "path";

const dataDirectoryPath = path.resolve(__dirname, "..", "..", "data");
const filePath = (fileName: string) =>
  path.resolve(dataDirectoryPath, fileName);

export const playersPath = filePath("players.json");
export const lastUpdatedPath = filePath("last-updated.json");
