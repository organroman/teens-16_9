// Завдання 2. Список користувачів
// Умова:
// Зроби GET-запит на
// https://jsonplaceholder.typicode.com/users
// і виведи імена (name) усіх користувачів.
// Підказка:
// data буде масивом, тому можна пройтися методом forEach.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })

  .then((users) => {
    users.forEach((user) => {
      console.log(user.name);
    });
  })

  .catch((error) => console.log("ERROR", error));
