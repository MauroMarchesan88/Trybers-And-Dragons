import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _mageArmy = 0;

  constructor(name: string) {
    super(name);
    Mage._mageArmy += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  // static energyType(): string {
  //   return Mage._energyType;
  // }

  static createdArchetypeInstances(): number {
    return Mage._mageArmy;
  }
}