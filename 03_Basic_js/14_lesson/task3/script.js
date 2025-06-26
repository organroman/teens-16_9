/**
 * При натисканні shift та "+"" одночасно збільшувати
 * шрифт сторінки на 1px
 * а при shift та "-" - зменшувати на 1px
 *
 * Максимальний розмір шрифту - 30px, мінімальний - 10px
 *
 */
let fontSize = 16;

window.addEventListener("keyup", function (event) {

  if (event.key === "+" && event.shiftKey) {
    if (fontSize < 30) {
      fontSize = fontSize + 1;
      document.body.style.fontSize = `${fontSize}px`;
    }
  } else if (event.key === "_" && event.shiftKey) {
    if (fontSize > 10) {
      fontSize = fontSize - 1;
      document.body.style.fontSize = `${fontSize}px`;
    }
  }
});
