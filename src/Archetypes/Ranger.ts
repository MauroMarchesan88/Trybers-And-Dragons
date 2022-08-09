import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _rangerArmy = 0;

  constructor(name: string) {
    super(name);
    Ranger._rangerArmy += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerArmy;
  }
}