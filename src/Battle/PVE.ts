import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected playerOne: Character | Fighter,
    protected monsters: Monster[] | SimpleFighter[],
  ) {
    super(playerOne);
  }

  fight(): number {
    // const enemies = this.monsters.every(
    //   (monster) => monster.lifePoints > 0,
    // );

    while (this.player.lifePoints > 0 && this.monsters.every(
      (monster) => monster.lifePoints > 0,
    )) {
      for (let i = 0; i < this.monsters.length; i += 1) {
        this.player.attack(this.monsters[i]);
        this.monsters[i].attack(this.player);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}