export class Options {
  constructor(private args: string[]) {}

  public get updateGameData(): boolean {
    return this.args.includes("game");
  }

  public get updateAccountsData(): boolean {
    return this.args.includes("accounts");
  }

  public get exportData(): boolean {
    return this.args.includes("export");
  }
}
