import React from "react";
import { Player } from "../../data/player.js";

export default (player: Player) => (
  <>
    {player.achievements.completed} ({player.achievements.points} points)
  </>
);
