import { ApiAccount } from "../api-accounts";
import { writeApiAccountData } from "./api-file-writer";

export const importAccountCharacter = (account: ApiAccount): Promise<void> =>
  writeApiAccountData(`characters/${account.character}`, account);
