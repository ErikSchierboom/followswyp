import { exportPlayers } from "./export-players";
import { exportLastUpdated } from "./export-last-updated";

export const exportData = () => {
  exportPlayers();
  exportLastUpdated();
};
