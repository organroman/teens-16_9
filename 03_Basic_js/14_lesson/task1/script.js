/**
 * Задание 1.
 *
 * Создать элемент h1 с текстом «Нажмите любую клавишу.».
 *
 * При нажатии любой клавиши клавиатуры менять текст элемента h1 на:
 * «Нажатая клавиша: ИМЯ_КЛАВИШИ».
 */

const key = document.createElement("h1");

key.textContent = "Натисніть любу клавішу";

document.body.prepend(key);

window.addEventListener("keydown", function (event) {
  key.textContent = `Натиснута клавіша: ${event.key}`;
});
