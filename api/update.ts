import { Options } from "./options";
import { importGame } from "./import/import-game";
import { importAccounts } from "./import/import-accounts";
import { exportPlayers } from "./export/export-players";

(async () => {
  const options = new Options(process.argv);
  if (options.updateAccountsData) await importAccounts();
  if (options.updateGameData) await importGame();
  if (options.exportData) exportPlayers();
})();
