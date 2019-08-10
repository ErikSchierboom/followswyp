import { readApiGameData, readApiAccountData } from "../files/api-file-reader";
import { ApiCurrency, ApiAccountCurrency } from "../types/currencies";
import { ApiAccount } from "../api-accounts";
import { Wallet } from "../../data/wallet";

const gameCurrencies = readApiGameData<ApiCurrency>("currencies");
const gameCurrency = (name: string) =>
  gameCurrencies.find(currency => currency && currency.name == name);

const coinsCurrency = gameCurrency("Coin");
const karmaCurrency = gameCurrency("Karma");

export const accountWallet = (account: ApiAccount): Wallet => {
  const accountCurrencies = readApiAccountData<ApiAccountCurrency[]>(
    "account-wallet",
    account
  );
  const accountCurrency = (currency: ApiCurrency) =>
    accountCurrencies.find(
      accountCurrency => accountCurrency.id == currency.id
    );

  return {
    coins: accountCurrency(coinsCurrency).value,
    karma: accountCurrency(karmaCurrency).value
  };
};
