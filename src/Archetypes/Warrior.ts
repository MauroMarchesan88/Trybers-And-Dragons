import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _warrArmy = 0;

  constructor(name: string) {
    super(name);
    Warrior._warrArmy += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warrArmy;
  }
}