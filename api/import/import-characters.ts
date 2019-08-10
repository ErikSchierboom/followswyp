import { ApiAccount } from "../api-accounts";
import { updateApiAccountData } from "../files/api-file-updater";

export const importAccountCharacter = (account: ApiAccount): Promise<void> =>
  updateApiAccountData(`characters/${account.character}`, account);
