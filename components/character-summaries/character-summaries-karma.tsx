import React from "react";
import { Player } from "../../data/player.js";
import Icon from "./icon";

export default (player: Player) => (
  <>
    <Icon src="https://render.guildwars2.com/file/94953FA23D3E0D23559624015DFEA4CFAA07F0E5/155026.png" />{" "}
    {player.wallet.karma}
  </>
);
