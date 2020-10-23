import { rooms, weapons, suspects } from './cards';

export class Mystery {
  mystery: { suspect: string, weapon: string, room: string };

  constructor() {
    this.mystery = this.loadMystery();
  }

  guess(suspect: string, weapon: string, room: string) {
    const mystery: string[] = Object.values(this.mystery);
    let score: number = 0;

    [suspect, weapon, room].forEach((arg: string) => {
      if (mystery.includes(arg)) {
        score++;
      }
    });

    if (score === 3) {
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
