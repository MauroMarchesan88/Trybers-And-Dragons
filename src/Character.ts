import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _lifePoints: number;
  private readonly _strength: number;
  private readonly _defense: number;
  private readonly _dexterity: number;
  private readonly _energy: Energy;
  private _maxLifePoints: number;
  private readonly _archetype: Archetype;
  private readonly _race: Race;
  static lifePoints: number;

  constructor(name: string) {
    this._dexterity = Math.floor(Math.random() * 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10);
    this._defense = Math.floor(Math.random() * 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10),
    };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy() {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  // set lifePoints(damage: number): void { this._lifePoints -= damage; }

  attack(enemy: Fighter): void {
    console.log(this.attack(enemy));
  }

  special(enemy: Fighter): void {
    console.log(this.special(enemy));
  }

  levelUp(): void {
    console.log(this.levelUp);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    let status = 'alive';
    const health = this.lifePoints;
    if (this.lifePoints < damage) status = 'dead';
    if (damage > 0 && status === 'alive') {
      Character.lifePoints -= damage;
    }
    return health;
  }
}
