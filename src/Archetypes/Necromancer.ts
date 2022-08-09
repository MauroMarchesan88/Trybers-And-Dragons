import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necroArmy = 0;

  constructor(name: string) {
    super(name);
    Necromancer._necroArmy += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._necroArmy;
  }
}