// console.log("My first NPM project");

import chalk from "chalk";

import oneLinerJoke from "one-liner-joke";

console.log(chalk.blue("Hello in blue"));
console.log(chalk.red.bold("Red alert!"));
console.log(chalk.green.underline("Success!"));

const joke = oneLinerJoke.getRandomJoke();
console.log(chalk.bgBlue.gray(joke.body));
