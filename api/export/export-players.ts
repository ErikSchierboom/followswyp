import { accounts, ApiAccount } from "../api-accounts";
import { Player } from "../../data/player";
import { readApiAccountData } from "../files/api-file-reader";
import { ApiCharacter } from "../types/character";
import { accountTitles } from "./export-titles";
import { accountAchievements } from "./export-achievements";
import { accountWallet } from "./export-wallet";
import { accountCrafting } from "./export-crafting";
import { writeToFile } from "./export-file-writer";
import { playersPath } from "./export-file-paths";

const exportPlayer = (account: ApiAccount): Player => {
  const character = readApiAccountData<ApiCharacter>(
    `characters-${account.character}`,
    account
  );

  return {
    name: account.owner,
    character: account.character,
    deaths: character.deaths,
    level: character.level,
    age: character.age,
    titles: accountTitles(account),
    achievements: accountAchievements(account),
    wallet: accountWallet(account),
    crafting: accountCrafting(character)
  };
};

export const exportPlayers = (): void => {
  const players = accounts.map(exportPlayer);
  writeToFile(playersPath, players);
};
