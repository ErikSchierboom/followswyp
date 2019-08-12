import fs from "fs";

export const writeToFile = (filePath: string, data: any): void => {
  const dataJson = JSON.stringify(data);
  fs.writeFileSync(filePath, dataJson);
};
