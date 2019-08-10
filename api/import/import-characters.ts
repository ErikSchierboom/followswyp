import { ApiAccount } from "../api-accounts";
import { writeApiAccountData } from "../files/api-file-writer";

export const importAccountCharacter = (account: ApiAccount): Promise<void> =>
  writeApiAccountData(`characters/${account.character}`, account);
