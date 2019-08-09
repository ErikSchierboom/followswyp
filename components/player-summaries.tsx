import players from "../data/players.json";

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
          <td data-label="Achievements">
            {player.achievements.length} (
            {player.achievements.reduce(
              (points, achievement) => points + achievement.points,
              0
            )}{" "}
            points)
          </td>
          <td data-label="Crafting level">
            {player.crafting.length > 0 ? (
              player.crafting.map((craft, i) => (
                <span key={craft.discipline}>
                  {craft.discipline} ({craft.rating})
                  {i < player.crafting.length - 1 && ", "}
                </span>
              ))
            ) : (
              <>-</>
            )}
          </td>
          <td data-label="Titles">{player.titles.length}</td>
          <td data-label="Coins">{player.wallet.coins}</td>
          <td data-label="Karma">{player.wallet.karma}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
