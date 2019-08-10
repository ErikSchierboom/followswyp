import React from "react";
import { Player } from "../../data/player.js";

export default (player: Player) => {
  if (player.crafting.length === 0) return <>-</>;

  return player.crafting.map((craft, i) => (
    <span key={craft.discipline}>
      {craft.discipline} ({craft.rating})
      {i < player.crafting.length - 1 && ", "}
    </span>
  ));
};
