/**
 * Задание 1.
 *
 * Написать скрипт, который создаст элемент button с текстом «Войти».
 *
 * При клике по кнопке выводить alert с сообщением: «Добро пожаловать!».
 *
 *
 * * При наведении на кнопку  указателем мыши, выводить alert с сообщением:
 * «При клике по кнопке вы войдёте в систему.».
 *
 * Сообщение должно выводиться один раз.
 */

const btn = document.createElement("button");
btn.textContent = "Увійти";

function clickHandler() {
  alert("Вітаемо");
}

btn.addEventListener("click", clickHandler);

document.body.append(btn);

function mouseOverHandler() {
  alert("Ви війдете в систему");
}

btn.addEventListener("mouseover", mouseOverHandler, 
    { once: true }
);
