/**
 * При натисканні на кнопку Validate відображати
 * VALID зеленим кольром, якщо значення проходить валідацію
 * INVALID червоним кольором, якщо значення не проходить валідацію
 *
 * Правила валідації значення:
 * - значення не пусте
 *
 * ADVANCED
 * Правила валідації значення:
 * - повинно містити щонайменше 5 символів
 * - не повинно містити пробілів
 * - повинно починатися з літери (потрібно використати регулярні вирази)
 *
 */
const input = document.querySelector("#input");
const btn = document.querySelector("#validate-btn");
const message = document.createElement("p");
btn.addEventListener("click", function () {
  const value = input.value;
  if (value===""){
    message.textContent="invalid";
    message.style.color="red";
  }
  else {
     message.textContent="valid";
     message.style.color="green";
  }
  btn.after(message);
});
