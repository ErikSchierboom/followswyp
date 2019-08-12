import { writeToFile } from "./export-file-writer";
import { lastUpdatedPath } from "./export-file-paths";

export const exportLastUpdated = (): void =>
  writeToFile(lastUpdatedPath, new Date());
