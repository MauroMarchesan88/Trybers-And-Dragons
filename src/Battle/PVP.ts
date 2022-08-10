import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected playerOne: Fighter, protected playerTwo: Fighter) {
    super(playerOne);
  }

  fight(): number {
    if (this.playerOne.lifePoints >= 0 || this.playerTwo.lifePoints >= 0) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }
    return this.playerOne.lifePoints === -1 ? -1 : 1;
  }
}