import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 84;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    const status = this._lifePoints < damage ? 'dead' : 'alive';
    if (status === 'dead') this._lifePoints = -1;
    if (damage > 0 && status === 'alive') {
      this._lifePoints -= damage;
      return this.lifePoints;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}