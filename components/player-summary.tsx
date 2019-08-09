import { Player } from "../data/player";

// TODO: create functional components for milligram

export default (player: Player): JSX.Element => (
  <div className="column">
    <div className="container">
      <div className="row">{player.character}</div>
      <div className="row">Level {player.level}</div>
      <div className="row">{player.deaths} deaths</div>
      <div className="row">{player.titles.length} titles</div>
      <div className="row">
        {player.achievements.filter(achievement => achievement.done).length}{" "}
        achievements,{" "}
        {player.achievements.reduce(
          (points, achievement) => points + achievement.points,
          0
        )}{" "}
        points
      </div>
      <div className="row">{player.wallet.coins} coins</div>
      <div className="row">{player.wallet.karma} karma</div>
      {player.crafting.map(craftingDiscipline => (
        <div className="row">
          Level {craftingDiscipline.rating} {craftingDiscipline.discipline}
        </div>
      ))}
    </div>
  </div>
);
