import { ApiElement } from "./api";
import { ApiCraftingDiscipline } from "./crafting";

export interface ApiCharacter extends ApiElement {
  readonly level: number;
  readonly deaths: number;
  readonly age: number;
  readonly crafting: ApiCraftingDiscipline[];
}
