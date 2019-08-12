import { ApiElement } from "./api";

export interface ApiAccountCurrency extends ApiElement {
  readonly value: number;
}

export interface ApiCurrency extends ApiElement {
  readonly name: string;
  readonly description: string;
  readonly order: number;
  readonly icon: string;
}
