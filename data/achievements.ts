export interface Achievement {
  readonly name: string;
  readonly current: number;
  readonly max: number;
  readonly done: boolean;
  readonly category: string;
}
