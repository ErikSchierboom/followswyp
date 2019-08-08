import withLayout from "../components/layout";
import PlayerSummary from "../components/player-summary";
import players from "../data/players.json";

const Index = () => (
  <div className="container">
    <div className="row">{players.map(PlayerSummary)}</div>
  </div>
);

export default withLayout(Index);
