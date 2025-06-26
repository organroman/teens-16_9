// Задание

// Программа будет выводить то или иное сообщение на страницу в зависимости от возраста пользователя.
// Сообщение представляет из себя html-элемент div. В нем будет сообщение (далее alert-message) и тип
// (тип алерта - это тот или иной класс для div).

// Логика:
// Спросить у пользователя его имя и возраст.
// Если число (также проверить, что там число) меньше 18, вывести на страницу
// сообщение, где alert-message - Sorry, you are not be able to visit us. Тип - 'alert-danger'
// Если больше 18 - alert-message 'Hi, ${name}.', тип 'alert-success';
let name = prompt("Введіть ім'я");
let age = +prompt("Введіть вік");

let message = document.createElement("div");

if (!isNaN(age)) {
  if (age < 18) {
    message.textContent = "Sorry, you are not be able to visit us.";
    message.classList.add ("alert-danger");
  } else {
    message.textContent = `Hi, ${name}`;
    message.classList.add("alert-success");
  }
}
else {
    message.textContent = "Введіть правильний вік";
    message.className = "alert-danger";
}
document.body.appendChild (message);
