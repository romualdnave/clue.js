#!/usr/bin/env node
import { Mystery } from "./game/mystery";
import { prompter } from './prompter';

const mystery = new Mystery();

(async () => {
  let guess;

  do {
    guess = await prompter.askForMystery();
  } while(mystery.guess(guess.suspect, guess.weapon, guess.room) !== -1);

  return ;
})();
