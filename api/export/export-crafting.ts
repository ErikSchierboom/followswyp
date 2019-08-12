import { ApiCharacter } from "../types/character";
import { CraftingDiscipline } from "../../data/crafting";

export const accountCrafting = (
  character: ApiCharacter
): CraftingDiscipline[] =>
  character.crafting.map(crafting => ({
    discipline: crafting.discipline,
    rating: crafting.rating
  }));
