export interface ApiAccount {
  readonly owner: string;
  readonly character: string;
  readonly apiKey: string;
}

export const accounts: ApiAccount[] = [
  {
    owner: "erik",
    character: "Mourning Woot",
    apiKey: process.env.FOLLOWSWYP_API_KEY_ERIK
  },
  {
    owner: "jens",
    character: "Oele Wapper",
    apiKey: process.env.FOLLOWSWYP_API_KEY_JENS
  },
  {
    owner: "toon",
    character: "Benedictus Xvi",
    apiKey: process.env.FOLLOWSWYP_API_KEY_TOON
  },
  {
    owner: "martijn",
    character: "Prefect Purrfect",
    apiKey: process.env.FOLLOWSWYP_API_KEY_MARTIJN
  },
  {
    owner: "jurrian",
    character: "Grombeer Grills",
    apiKey: process.env.FOLLOWSWYP_API_KEY_JURRIAN
  }
];
