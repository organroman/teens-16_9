// Завдання 3. Коментарі до поста
// Умова:
// Зроби GET-запит, щоб отримати коментарі до поста з postId = 1 за адресою:
// https://jsonplaceholder.typicode.com/comments?postId=1
// Виведи email авторів цих коментарів.
// Підказка:
// Зверни увагу на параметр у рядку запиту ?postId=1.

fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((res) => {
    console.log("response", res);
    return res.json();
  })
  .then((comentars) => {
    console.log("comments", comentars);

    comentars.forEach((element) => {
      console.log(element.email);
    });
  })
  .catch((error) => console.log("Помилка ->", error));
