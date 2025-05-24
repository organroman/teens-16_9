/**
 *
 * Написать функцию-сумматор.
 * Функция обладает двумя числовыми параметрами, и возвращает результат их сложения.
 *
 * Вывести в консоль результат сложения 2 и 4, 5 и 7.
 * Вывести на экран результат сложения 5 и 6;
 */

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 4));
console.log(sum(5, 7));
console.log(sum(5, 6));

// function min(a, b) {
//   if (a === b) {
//     return "Error Numbers";
//   } else if (a < b) {
//     return a;
//   } else return b;
 console.log(min(2, 4));
 console.log(min(16, 7));
 console.log(min(5));

function min(a, b) {
  switch (true) {
    case a === b:
      return "Error Numbers";
    case a < b:
      return a;
    case a > b:
      return b;

    default:
      return "Invalid Numbers";
  }
}
