import { Options } from "./options";
import { importGame } from "./import/import-game";
import { importAccounts } from "./import/import-accounts";
import { exportData } from "./export/export-data";

(async () => {
  const options = new Options(process.argv);
  if (options.updateAccountsData) await importAccounts();
  if (options.updateGameData) await importGame();
  if (options.exportData) exportData();
})();
