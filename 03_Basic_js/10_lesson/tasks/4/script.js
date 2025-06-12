/**
 * Задание 3.
 *
 * Получить элементи с классом .list-item.
 * Отобрать элемент с контентом: «Item 5».
 *
 * Заменить текстовое содержимое этого элемента на ссылку, указанную в секции «дано».
 *
 * Сделать это так, чтобы новый элемент в разметке не был создан.
 *
 * Затем отобрать элемент с контентом: «Item 6».
 * Заменить содержимое этого элемента на такую-же ссылку.
 *
 * Сделать это так, чтобы в разметке был создан новый элемент.
 *
 * Условия:
 * - Обязательно использовать метод для перебора;
 */

// tagName
// .className
// #idName

/* Дано */
const targetElement =
  '<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">Google it!</a>';

const elements = document.querySelectorAll(".list-item");
console.log("🚀 ~ elements:", elements);
elements.forEach((element) => {
  if (element.innerText === "Item 5") {
    element.innerText = targetElement;
  }
  else if (element.innerText==='Item 6'){
    element.innerHTML=targetElement;
  }
});
