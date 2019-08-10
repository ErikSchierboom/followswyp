import React from "react";
import { Player } from "../../data/player.js";

const points = (player: Player) =>
  player.achievements.reduce(
    (points, achievement) => points + achievement.points,
    0
  );

export default (player: Player) => (
  <>
    {player.achievements.length} ({points(player)} points)
  </>
);
