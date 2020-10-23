import { Mystery } from "./board/mystery";
import { prompt } from './board/inquirer';

const mystery = new Mystery();

(async () => {
  let guess;

  do {
    guess = await prompt.askUserToGuessAMystery();
  } while(mystery.guess(guess.suspect, guess.weapon, guess.room) !== -1);

  return ;
})();
