import players from "../data/players.json";
import { Achievement } from "../data/achievements.js";
import { CraftingDiscipline } from "../data/crafting.js";

const Achievements = (achievements: Achievement[]) => {
  const points = achievements.reduce(
    (points, achievement) => points + achievement.points,
    0
  );

  return (
    <>
      {achievements.length} ({points} points)
    </>
  );
};

const Crafting = (craftingDisciplines: CraftingDiscipline[]) => {
  if (craftingDisciplines.length === 0) return <>-</>;

  return craftingDisciplines.map((craft, i) => (
    <span key={craft.discipline}>
      {craft.discipline} ({craft.rating})
      {i < craftingDisciplines.length - 1 && ", "}
    </span>
  ));
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
          <td data-label="Achievements">{Achievements(player.achievements)}</td>
          <td data-label="Crafting level">{Crafting(player.crafting)}</td>
          <td data-label="Titles">{player.titles.length}</td>
          <td data-label="Coins">{player.wallet.coins}</td>
          <td data-label="Karma">{player.wallet.karma}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
