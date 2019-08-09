import players from "../data/players.json";
import { Player } from "../data/player.js";

const Achievements = (player: Player) => {
  const points = player.achievements.reduce(
    (points, achievement) => points + achievement.points,
    0
  );

  return (
    <>
      {player.achievements.length} ({points} points)
    </>
  );
};

const Crafting = (player: Player) =>
  player.crafting.length === 0 ? (
    <>-</>
  ) : (
    player.crafting.map((craft, i) => (
      <span key={craft.discipline}>
        {craft.discipline} ({craft.rating})
        {i < player.crafting.length - 1 && ", "}
      </span>
    ))
  );

const Titles = (player: Player) =>
  player.titles.length === 0 ? (
    <>0</>
  ) : (
    <span className="tooltip" aria-label={player.titles.join(", ")}>
      {player.titles.length}
    </span>
  );

const Coins = (player: Player) => {
  const gold = Math.floor(player.wallet.coins / 10000);
  const silver = Math.floor((player.wallet.coins % 10000) / 100);
  const bronze = player.wallet.coins % 100;

  return (
    <>
      {gold}G {silver}S {bronze}B
    </>
  );
};

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
          <td data-label="Deaths">{player.deaths}</td>
          <td data-label="Achievements">{Achievements(player)}</td>
          <td data-label="Crafting level">{Crafting(player)}</td>
          <td data-label="Titles">{Titles(player)}</td>
          <td data-label="Coins">{Coins(player)}</td>
          <td data-label="Karma">{player.wallet.karma}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
