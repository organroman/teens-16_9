// let total = 10;
// const add = (x, y) => Number(x) + Number(y);

// function add(x, y) {
//   let result = Number(x) + Number(y);
//   return result;
// }

// console.log(add("10", 5));

//   ЗАДАЧА 2. "FizzBuzz Visual"
//   Опис: Виведи 1..100. Кратні 3 → "Fizz", 5 → "Buzz", 15 → "FizzBuzz".
//   Якщо передано контейнер — намалюй <ul>; інакше поверни масив рядкf

// function fizzBuzzVisual(container = null) {
//   let result = [];
//   for (let index = 1; index <= 100; index++) {
//     let label = "";
//     if (index % 3 === 0) {
//       label = "Fizz";
//     }
//     if (index % 5 === 0) {
//       label = "Buzz";
//     }
//     if (index % 15 === 0) {
//       label = "FizzBuzz";
//     }
//     result.push(label || index);
//   }
//   if (container) {
//     const ul = document.createElement("ul");
//     result.forEach((label) => {
//       const item = document.createElement("li");
//       item.textContent = label;
//       ul.append(item)
//     });
//     container.innerHTML = ""
//     container.append(ul)
//   }

//   return result;
// }
// const body = document.querySelector("body")
// console.log(fizzBuzzVisual(body));

//   ЗАДАЧА 5. "Калькулятор (switch)"
//   Опис: Функція calc(a,b,op) з опами: + - * /. Ділення на 0 — помилка.

function calc(a, b, op) {
  const x = Number(a);
  const y = Number(b);
  switch (op) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return y === 0 ? "НА нуль ділити не можна" : x / y;
    default:
      return "Невідома операція";
  }
}
console.log(calc(2, 0, "/"));


y === 0 ? "НА нуль ділити не можна" : x / y;
if (y === 0) {
  return "НА нуль ділити не можна";
} else x / y;
