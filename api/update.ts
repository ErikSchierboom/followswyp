import { Options } from "./options";
import { importGame } from "./import/import-game";
import { importAccounts } from "./import/import-accounts";
import { exportPlayers } from "./export/export-players";

const importData = async () => {
  const options = new Options(process.argv);
  const tasks = [];
  if (options.updateAccountsData) tasks.push(importAccounts());
  if (options.updateGameData) tasks.push(importGame());
  await Promise.all(tasks);
};

const exportData = () => exportPlayers();

(async () => {
  try {
    await importData();
    exportData();
  } catch (err) {
    console.error(err);
  }
})();
