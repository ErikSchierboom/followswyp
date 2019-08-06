import "milligram";
import withLayout from "../components/layout";
import players from "../data/players.json";
import { Player } from "../data/player";

// TODO: consider how to use HOC to simplify HeaderRow and Row
// TODO: extract components to separate files
// TODO: register domain name
// TODO: integrate with CircleCI
// TODO: automatic deployment

const HeaderRow = (field: string, fieldAccessor: (player: Player) => any) => {
  return (
    <tr>
      <th>{field}</th>
      {players.map(player => (
        <th key={player.name}>{fieldAccessor(player)}</th>
      ))}
    </tr>
  );
};

const Row = (field: string, fieldAccessor: (player: Player) => any) => {
  return (
    <tr>
      <td>{field}</td>
      {players.map(player => (
        <td key={player.name}>{fieldAccessor(player)}</td>
      ))}
    </tr>
  );
};

const Home = () => (
  <table>
    <thead>{HeaderRow("Player", player => player.character)}</thead>
    <tbody>{Row("Level", player => player.level)}</tbody>
    <tbody>{Row("Deaths", player => player.deaths)}</tbody>
    <tbody>{Row("Titles", player => player.titles.length)}</tbody>
  </table>
);

export default withLayout(Home);
