import { Achievements } from "./achievements";
import { CraftingDiscipline } from "./crafting";
import { Wallet } from "./wallet";

export interface Player {
  readonly name: string;
  readonly character: string;
  readonly level: number;
  readonly deaths: number;
  readonly titles: string[];
  readonly achievements: Achievements;
  readonly wallet: Wallet;
  readonly crafting: CraftingDiscipline[];
}
