export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  abstract get maxLifePoints(): number;
  static createdRacesInstances(): number { throw new Error('Not implemented'); }
}