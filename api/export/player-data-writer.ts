import fs from "fs";

import { Player } from "../../data/player";
import { playersPath } from "./export-file-paths";

export const writePlayers = (players: Player[]): void => {
  const playersJson = JSON.stringify(players);
  fs.writeFileSync(playersPath, playersJson);
};
