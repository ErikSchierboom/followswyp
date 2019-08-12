import { ApiElement, ApiElementId } from "./api";

export interface ApiAchievementTier {
  readonly count: number;
  readonly points: number;
}

export interface ApiAchievement extends ApiElement {
  readonly name: string;
  readonly description: string;
  readonly requirement: string;
  readonly locked_text: string;
  readonly type: string;
  readonly flags: string[];
  readonly tiers: ApiAchievementTier[];
  readonly prerequisites: ApiElementId[];
}

export interface ApiAchievementCategory extends ApiElement {
  readonly name: string;
  readonly description: string;
  readonly order: number;
  readonly icon: string;
  readonly achievements: ApiElementId[];
}

export interface ApiAccountAchievement extends ApiElement {
  readonly current: number;
  readonly max: number;
  readonly done: boolean;
}
