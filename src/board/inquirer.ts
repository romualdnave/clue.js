import { rooms, suspects, weapons } from "./cards";

const inquirer = require('inquirer');

export const prompt = {
  askUserToGuessAMystery: () => {
    const questions = [
      {
        name: 'suspect',
        type: 'input',
        message: `Who would you suspect among ${suspects} ?`,
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a suspect.';
          }
        }
      },
      {
        name: 'weapon',
        type: 'input',
        message: `What weapon would've used your suspect among ${weapons} ?`,
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a weapon.';
          }
        }
      },
      {
        name: 'room',
        type: 'input',
        message: `In which room among ${rooms} ?`,
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a room.';
          }
        }
      },
    ];
    return inquirer.prompt(questions);
  },
};
