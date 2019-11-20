import React from "react";
import players from "../../data/players.json";
import Achievements from "./character-summaries-achievements";
import Crafting from "./character-summaries-crafting";
import Titles from "./character-summaries-titles";
import Coins from "./character-summaries-coins";
import Karma from "./character-summaries-karma";
import Deaths from "./character-summaries-deaths";

export default () => (
  <table className="horizontal">
    <caption>Characters</caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Level</th>
        <th>Deaths</th>
        <th>Achievements</th>
        <th>Crafting levels</th>
        <th>Titles</th>
        <th>Coins</th>
        <th>Karma</th>
      </tr>
    </thead>
    <tbody>
      {players.map(player => (
        <tr key={player.character}>
          <td data-label="Name">{player.character}</td>
          <td data-label="Level">{player.level}</td>
          <td data-label="Deaths">{Deaths(player)}</td>
          <td data-label="Achievements">{Achievements(player)}</td>
          <td data-label="Crafting level">{Crafting(player)}</td>
          <td data-label="Titles">{Titles(player)}</td>
          <td data-label="Coins">{Coins(player)}</td>
          <td data-label="Karma">{Karma(player)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
