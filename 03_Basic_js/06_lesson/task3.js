/**
 * Отримати від користувача 2 числа. Запитувати його
* число заново доти, доки він не введе валідне число.
// Перевірку на валідність - оформити у функцію, якій ми передаємо значення, а
// функція перевіряє значення на null, на порожній рядок, на NaN і повертає true
// якщо число валідне, інакше false;
// Якщо 2 числа валідні, вивести в консоль і на екран - результат їхнього додавання
 */

function validateNumber(value) {
  return value !== null && value.trim() !== "" && !isNaN(+value);
}

function getValideNumber(promptMassage) {
  let imput;
  do {
    imput = prompt(promptMassage);
  } while (!validateNumber(imput));

  return Number(imput);
}

let numberOne = getValideNumber("Введіть перше чиcло");
let numberTwo = getValideNumber("Введіть друге чиcло");

const result = numberOne + numberTwo;
console.log(numberOne + numberTwo);

console.log(result);

const divide = result / 2;
console.log("🚀 ~ divide:", divide)
