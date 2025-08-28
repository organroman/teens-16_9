import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("First number", (num1) => {
  rl.question("Second number", (num2) => {
    rl.question("Operation (+ - * /)", (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;

        default:
          result = "Invalid operation";
          break;
      }

      console.log(`result of ${a} ${op} ${b} = `, result);
      rl.close();
    });
  });
});
