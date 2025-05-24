/**
 *  Написати функцію, яка отримує на вхід два числа.
// Якщо обидва числа парні - функція повертає їхнє множення (а * б).
// Якщо обидва числа непарні – функція повертає їхню суму.
// Якщо одне з чисел парне, а друге непарне – функція повертає це непарне число.
// Обидва числа перевірити на коректність.
 * 
 */
function isValidNumber(value) {
  return typeof value === "number";
}
function isEven(number) {
  return number % 2 === 0;
}
function isOdd(number) {
  return number % 2 !== 0;
}

function result(a, b) {
  // Перевірка числа на коректність

  if (!isValidNumber(a) || !isValidNumber(b)) {
    return console.log("Error");
  }

  if (isEven(a) && isEven(b)) {
    return a * b;
  }
  if (isOdd(a) && isOdd(b)) return a + b;
  if (isOdd(a)) {
    return a; 
  } else return b
}

console.log(result(7, 5));
console.log(result(8, 5));
console.log(result(15, 28));
