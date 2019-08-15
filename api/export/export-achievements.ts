import { readApiGameData, readApiAccountData } from "../files/api-file-reader";
import { ApiAchievement, ApiAccountAchievement } from "../types/achievements";
import { ApiAccount } from "../api-accounts";
import { Achievements } from "../../data/achievements";
import { memoize } from "../memoize";

const gameAchievements = memoize(() =>
  readApiGameData<ApiAchievement>("achievements")
);

const accountAchievementsCompleted = (
  accountAchievements: ApiAccountAchievement[]
): number => accountAchievements.filter(achievement => achievement.done).length;

const accountAchievementPoints = (
  accountAchievement: ApiAccountAchievement
): number => {
  const achievement = gameAchievements()[accountAchievement.id];
  return (
    (achievement &&
      achievement.tiers
        .filter(tier => tier.count <= accountAchievement.current)
        .reduce((points, tier) => points + tier.points, 0)) ||
    0
  );
};

const accountAchievementsPoints = (
  accountAchievements: ApiAccountAchievement[]
): number =>
  accountAchievements
    .map(accountAchievementPoints)
    .reduce((points, achievementPoints) => points + achievementPoints, 0);

export const accountAchievements = (account: ApiAccount): Achievements => {
  const accountAchievements = readApiAccountData<ApiAccountAchievement[]>(
    "account-achievements",
    account
  );

  return {
    completed: accountAchievementsCompleted(accountAchievements),
    points: accountAchievementsPoints(accountAchievements)
  };
};
