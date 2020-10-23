const inquirer = require('inquirer');

import { questions } from "./game/questions";

export const prompter = {
  askForMystery: () => inquirer.prompt(questions),
};
