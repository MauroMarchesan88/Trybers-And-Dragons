import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _maxLifePoints: number;
  private readonly _archetype: Archetype;
  private readonly _race: Race;

  constructor(name: string) {
    this._dexterity = Math.floor((Math.random() * 9) + 1);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor((Math.random() * 9) + 1);
    this._defense = Math.floor((Math.random() * 9) + 1);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor((Math.random() * 9) + 1),
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

  special(enemy: Fighter): void {
    console.log(this.special(enemy));
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    const status = this._lifePoints < damage ? 'dead' : 'alive';
    if (status === 'dead') this._lifePoints = -1;
    if (damage > 0 && status === 'alive') {
      this._lifePoints -= damage;
      return this._lifePoints;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._strength += Math.floor((Math.random() * 9) + 1);
    this._dexterity += Math.floor((Math.random() * 9) + 1);
    this._defense += Math.floor((Math.random() * 9) + 1);
    const hpPlus = Math.floor((Math.random() * 9) + 1);
    if (
      this._maxLifePoints + hpPlus
      > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints += hpPlus;
    }
    this._lifePoints = this._maxLifePoints;
  }
}
