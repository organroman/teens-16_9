// Завдання 1. Отримати один пост
// Умова:
// Зроби GET-запит за адресою
// https://jsonplaceholder.typicode.com/posts/1
// і виведи у консоль заголовок (title) цього поста.
// Підказка:
// Використай response.json() і доступ до властивості об’єкта.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((result) => {
    console.log("title", result.title);
  })
  .catch((error) => console.log("somrthing went wrong", error));
