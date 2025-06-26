/**
 * Початкове значення кнопки повинно дорівнювати 0
 * При натисканні на кнопку збільшувати це значення на 1
 *
 */

let counter1 = 0;

const btn = document.querySelector(".counter");
const div = document.querySelector("#div");
console.log("🚀 ~ div:", div)
const span = document.querySelector("span");
console.log("🚀 ~ span:", span)
console.log(btn);

btn.textContent = counter1;

btn.addEventListener("click", function () {
  counter1 = counter1 + 1;
  btn.textContent = counter1;
});
