/**
 *
 * Оператори порівняння:
 *
 * більше менше: a > b, a < b;
 * більше.менше або дорінює а >=b, a <=b;
 * дорівню: a == b (не перевіяє тип, а автоматично приводить) a === b (строге порівняння (первіряє тип))
 * не дорівнює: a != b, a !== b.
 */

console.log(2 > 1);

console.log(2 == 1);
console.log(2 != 1);

const numOne = 58;
const numTwo = 24;

let result = numOne > numTwo;
console.log(result);

let firstStr = "Hello";
let secondStr = "Helrld";

let strResult = firstStr > secondStr;

console.log(strResult);

console.log("2 <13 = ", 2 < "13");
console.log(true == 0);

console.log("'22' == 22", "22" == 22);
console.log("'22' === 22", "22" === 22);

/**
 * Логічні оператори
 *
 * "||", "&&", "!"
 *
 * "||" - або. повертає true якщо один із операндів true.
 */

console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);

// console.log("true || 'неважливо що'", true || "неважливо що");

// console.log("null || 0 1 ", null || 0 || true);

console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);

/**
 *
 * if (умова) {
 * код, якщо умова true}
 * else {
 * код, якщо умова false}
 */

if (result === true) {
  console.log(`${numOne} більще ${numTwo}`);
} else console.log(`${numOne} менше ${numTwo}`);

/**
 * switch case
 */

let accessLevel = "moderator";

switch (accessLevel) {
  case "manager":
    console.log("Ви менеджер");
    break;
  case "admin":
    console.log("Ви адмін");
    break;
  case "moderator":
    console.log("Ви moderator");
    break;

  default:
    console.log("Я не знаю хто ти, чудовище!");
    break;
}
