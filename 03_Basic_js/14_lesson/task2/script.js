/**
 * Рахувати кількість натискань на пробіл, ентер,
 * та Backspace клавіші
 * Відображати результат на сторінці
 *
 * ADVANCED: створити функцію, яка приймає тільки
 * назву клавіші, натискання якої потрібно рахувати,
 * а сам лічильник знаходиться в замиканні цієї функції
 * (https://learn.javascript.ru/closure)
 * id елемента, куди відображати результат має назву
 * "KEY-counter"
 *
 * Наприклад виклик функції
 * createCounter('Enter');
 * реалізовує логіку підрахунку натискання клавіші Enter
 * та відображає результат в enter-counter блок
 *
 */

let counter_enter = 0;
let counter_space = 0;
let counter_backspace = 0;

window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    const enterCounterEl = document.querySelector("#enter-counter");
    counter_enter = counter_enter + 1;
    enterCounterEl.textContent = counter_enter;
  } 
  else if (event.code === "Space") {
    const spaceCounterEl = document.querySelector("#space-counter");
    counter_space = counter_space + 1;
    spaceCounterEl.textContent = counter_space;
  } 
  else if (event.code === "Backspace") {
    const backCounterEl = document.querySelector("#backspace-counter");
    counter_backspace = counter_backspace + 1;
    backCounterEl.textContent = counter_backspace
  }
});  
