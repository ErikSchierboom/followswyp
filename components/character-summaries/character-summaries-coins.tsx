import React from "react";
import { Player } from "../../data/player.js";
import Icon from "./icon";

export default (player: Player) => {
  const gold = Math.floor(player.wallet.coins / 10000);
  const silver = Math.floor((player.wallet.coins % 10000) / 100);
  const bronze = player.wallet.coins % 100;

  return (
    <>
      <Icon src="https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png" />{" "}
      {gold}G {silver}S {bronze}B
    </>
  );
};
