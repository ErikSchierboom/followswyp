import React from "react";
import { Player } from "../../data/player.js";

export default (player: Player) => {
  const gold = Math.floor(player.wallet.coins / 10000);
  const silver = Math.floor((player.wallet.coins % 10000) / 100);
  const bronze = player.wallet.coins % 100;

  return (
    <>
      {gold}G {silver}S {bronze}B
    </>
  );
};
