/**
 * Задание 1.
 *
 * Написать скрипт, который создаст квадрат произвольного размера.
 *
 * Размер квадрата в пикселях получить интерактивно посредством диалогового окна prompt.
 *
 * Если пользователь ввёл размер квадрата в некорректном формате —
 * запрашивать данные повторно до тех пор, пока данные не будут введены корректно.
 *
 * Все стили для квадрата задать через JavaScript посредством одной строки кода.
 *
 * Тип элемента, описывающего квадрат — div.
 * Задать ново-созданному элементу CSS-класс .square.
 *
 * Квадрат в виде стилизированного элемента div необходимо
 * сделать первым и единственным потомком body документа.
 */
let size = Number(prompt("Введіть розміри квадрата в пикселях"));

while (Number.isNaN(size)) {
  size = Number(prompt("Неправильно. Введіть розміри квадрата в пикселях"));
}

let square = document.createElement("div");
square.className = "square";
square.style.cssText = `width: ${size}px;
height: ${size}px; background-color: blue;`;

const body = document.querySelector("body")
body.append(square)