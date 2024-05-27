#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

(async () => {
    const  {duration} = await inquirer.prompt([
        {
            type: 'number',
            name: 'duration',
            message: 'Enter the duration of the timer in seconds:',
            validate: (input) => input > 0 || 'Please enter a valid positive number of seconds.'
        }
    ]);

    console.log(chalk.green("Timer started!"));
    for (let i = duration; i > 0; i--) {
        console.log(chalk.blue(`Remaining time: ${i} seconds`));
       let make = await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log(chalk.red("Timer ended!"));
})();
