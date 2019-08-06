import { accounts, ApiAccount } from "../api-accounts";
import { Player } from "../../data/player";
import { readApiAccountData } from "./api-file-reader";
import { ApiCharacter } from "../types/character";
import { accountTitles } from "./export-titles";
import { accountAchievements } from "./export-achievements";
import { accountWallet } from "./export-wallet";
import { accountCrafting } from "./export-crafting";
import { writePlayers } from "./player-data-writer";

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
    titles: accountTitles(account),
    achievements: accountAchievements(account),
    wallet: accountWallet(account),
    crafting: accountCrafting(character)
  };
};

export const exportPlayers = (): void => {
  const players = accounts.map(exportPlayer);
  writePlayers(players);
};
