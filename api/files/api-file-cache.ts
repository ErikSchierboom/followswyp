import fs from "fs";
import { lastModifiedDate } from "./file";

const fileHasExpiredLifetime = (
  filePath: string,
  lifetimeInSeconds: number
): boolean => {
  const lastModifiedTime = lastModifiedDate(filePath).getTime();
  const currentTime = new Date().getTime();

  const actualLifetimeInSeconds = (currentTime - lastModifiedTime) / 1000;
  return actualLifetimeInSeconds > lifetimeInSeconds;
};

const fileDoesNotExist = (filePath: string): boolean =>
  !fs.existsSync(filePath);

export const fileHasExpired = (
  filePath: string,
  lifetimeInSeconds: number
): boolean =>
  fileDoesNotExist(filePath) ||
  fileHasExpiredLifetime(filePath, lifetimeInSeconds);
