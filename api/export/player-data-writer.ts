import fs from "fs";
import path from "path";

import { Player } from "../../data/player";

const playersPath = path.resolve(__dirname, "..", "..", "data", "players.json");

export const writePlayers = (players: Player[]): void => {
  const playersJson = JSON.stringify(players);
  fs.writeFileSync(playersPath, playersJson);
};
