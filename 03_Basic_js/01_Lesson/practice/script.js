//  * ЗАВДАННЯ 1
// *
//  * Створити змінну, записати до неї число, вивести значення цієї змінної в консоль.

// let number = 15
// console.log(number);

/**
 * ЗАВДАННЯ 2
 *
 * Створити змінну за допомогою ключового слова const, записати до неї число.
 * Присвоїти цій змінній нове число.
 */

// const number = 16;
// number = 17;
// console.log(number)

//  * ЗАВДАННЯ 3
//  *
//  * Записати в змінну '123', вивести в консоль типу цієї змінної.
//  * Перетворити цю змінну на чисельний тип за допомогою parseInt(), parseFloat(), унарний плюс +
//  * Після цього повторно вивести в консоль типуз цієї змінної.

// let quest = "123.56";
// let str = "2434fdgg"
// let stradv = `hello gffgg gfgf ${quest}`

// console.log("stradb-===>>>", stradv)
// console.log(typeof stradv);

// console.log("typeof initial variable ->>> ", typeof quest);
// let x = quest + 100;

// console.log("sum of quest + 100 =", x);

// quest = parseInt(quest);
// console.log("typeof after parseInt---->", typeof quest);

// let y = quest + 100;
// console.log("sum of quest + 100 =", y);

// quest = parseFloat(quest)
// console.log("typeof after parseFloat---->", typeof quest);

// quest = +quest
// console.log("typeof after +---->", typeof quest);
// console.log(quest)

/**
 * ЗАДАНИЕ 4
 *
 * Вывести на экран уведомление с текстом "Hello! This is alert" при помощи модального окна alert.
 */

// let text = "Hello! This is alert";
// alert(text);

/**
 * ЗАДАНИЕ 5
 *
 * Вывести на экран модальное окно prompt с сообщением "Enter the number".
 * Результат выполнения модального окна записать в переменную, значение которой вывести в консоль.
 */
// let enteringData = prompt("Enter the number");
// console.log(
//   "дані введені користувачем ->>>",
//   enteringData,
//   "тип даних від користувача --->>",
//   typeof enteringData
// );

// let x = +enteringData + 10;
// console.log("x=", x)

/**
 * ЗАДАНИЕ 6
 *
 * При помощи модального окна prompt получить от пользователя два числа.
 * Вывести в консоль сумму, разницу, произведение, результат деления и остаток от деления их друг на друга.
 */

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = +prompt("Enter second number");
console.log(`${firstNumber} + ${secondNumber}=`, secondNumber + firstNumber);
console.log(`${secondNumber} - ${firstNumber}=`, secondNumber - firstNumber);
console.log(`${firstNumber} / ${secondNumber}=`, firstNumber / secondNumber);
console.log(`${firstNumber} * ${secondNumber}=`, firstNumber * secondNumber);
console.log(`${firstNumber} % ${secondNumber}=`, firstNumber % secondNumber);
