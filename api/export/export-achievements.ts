import { readApiGameData, readApiAccountData } from "./api-file-reader";
import {
  ApiAchievement,
  ApiAchievementCategory,
  ApiAccountAchievement
} from "../types/achievements";
import { ApiAccount } from "../api-accounts";
import { Achievement } from "../../data/achievements";

const gameAchievements = readApiGameData<ApiAchievement>("achievements");
const gameAchievementCategories = readApiGameData<ApiAchievementCategory>(
  "achievements-categories"
);

const accountAchievementName = (
  accountAchievement: ApiAccountAchievement
): string => {
  const achievement = gameAchievements[accountAchievement.id];
  return (achievement && achievement.name) || "Unknown";
};

const accountAchievementCategoryName = (
  accountAchievement: ApiAccountAchievement
): string => {
  const achievementCategory = gameAchievementCategories.find(
    achievementCategory =>
      achievementCategory &&
      achievementCategory.achievements &&
      achievementCategory.achievements.includes(accountAchievement.id)
  );

  return achievementCategory && achievementCategory.name;
};

const accountAchievementPoints = (
  accountAchievement: ApiAccountAchievement
): number => {
  const achievement = gameAchievements[accountAchievement.id];
  return (
    (achievement &&
      achievement.tiers
        .filter(tier => tier.count <= accountAchievement.current)
        .reduce((points, tier) => points + tier.points, 0)) ||
    0
  );
};

export const accountAchievements = (account: ApiAccount): Achievement[] => {
  const accountAchievements = readApiAccountData<ApiAccountAchievement[]>(
    "account-achievements",
    account
  );

  return accountAchievements.map(accountAchievement => ({
    name: accountAchievementName(accountAchievement),
    current: accountAchievement.current,
    max: accountAchievement.max,
    done: accountAchievement.done,
    points: accountAchievementPoints(accountAchievement),
    category: accountAchievementCategoryName(accountAchievement)
  }));
};
