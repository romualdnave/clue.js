import { rooms, suspects, weapons } from "./cards";

export const questions = [
  {
    name: 'suspect',
    type: 'list',
    message: `Who would you suspect among ${suspects} ?`,
    choices: suspects,
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
    type: 'list',
    message: `What weapon would've used your suspect among ${weapons} ?`,
    choices: weapons,
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
    type: 'list',
    message: `In which room among ${rooms} ?`,
    choices: rooms,
    validate: (value: string) => {
      if (value.length) {
        return true;
      } else {
        return 'Please enter a room.';
      }
    }
  },
];
