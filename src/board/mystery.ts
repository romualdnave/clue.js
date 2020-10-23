import { rooms, weapons, suspects } from './cards';

export class Mystery {
  mystery: { suspect: string, weapon: string, room: string };

  constructor() {
    this.mystery = this.loadMystery();
  }

  guess(suspect: string, weapon: string, room: string) {
    const mystery: string[] = Object.values(this.mystery);
    let score: number = 0;

    if (mystery.includes(suspect.trim())) {
      score++;
    }
    if (mystery.includes(weapon.trim())) {
      score++;
    }
    if (mystery.includes(room.trim())) {
      score++;
    }
    if (score === 3) {
      console.log(`Congratulations ! You solved the mystery !`);
      return -1;
    } else {
      console.log(`You guessed ${score} pieces of the mystery...`);
    }
    return score;
  }

  private loadMystery() {
    return {
      suspect: this.pickOneCardFrom(suspects),
      weapon: this.pickOneCardFrom(weapons),
      room: this.pickOneCardFrom(rooms)
    };
  }

  private pickOneCardFrom(cards: string[]) {
    return cards[Math.floor(Math.random() * (Math.floor(cards.length) - 1))];
  }

}
