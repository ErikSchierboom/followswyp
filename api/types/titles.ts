import { ApiElement, ApiElementId } from "./api";

export interface ApiTitle extends ApiElement {
  readonly name: string;
  readonly achievement: ApiElementId;
  readonly achievements: ApiElementId[];
}

export type ApiAccountTitle = ApiElementId;
