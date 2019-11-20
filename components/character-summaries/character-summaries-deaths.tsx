import React from "react";
import { Player } from "../../data/player.js";

export default (player: Player) => {
  const hours = player.age / 3600;
  const deathsPerHourRatio = player.deaths / hours;
  const deathsPerHour = `${deathsPerHourRatio.toPrecision(2)} per hour`;

  return (
    <span className="tooltip" aria-label={deathsPerHour}>
      {player.deaths}
    </span>
  );
};
