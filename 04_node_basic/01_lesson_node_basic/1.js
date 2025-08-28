import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", (answer) => {
  fs.appendFileSync("users.txt", answer + "\n");
  console.log(`${answer} saved to users.txt`);
  rl.close();
});
