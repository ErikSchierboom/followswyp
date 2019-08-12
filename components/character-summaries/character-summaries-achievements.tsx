import React from "react";
import { Player } from "../../data/player.js";

const points = (player: Player) =>
  player.achievements.reduce(
    (points, achievement) => points + achievement.points,
    0
  );

const completedAchievements = (player: Player) =>
  player.achievements.filter(achievement => achievement.done).length;

export default (player: Player) => (
  <>
    {completedAchievements(player)} ({points(player)} points)
  </>
);
