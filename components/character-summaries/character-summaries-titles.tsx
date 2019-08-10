import React from "react";
import { Player } from "../../data/player.js";

export default (player: Player) => {
  if (player.titles.length === 0) return <>0</>;

  return (
    <span className="tooltip" aria-label={player.titles.join(", ")}>
      {player.titles.length}
    </span>
  );
};
