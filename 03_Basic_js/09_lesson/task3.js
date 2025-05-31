/* ## Завдання

Реалізувати функцію для створення об'єкта «користувач».

#### Технічні вимоги:
- Написати функцію ` createNewUser()`, яка буде створювати і повертати об'єкт `newUser`.
- Під час виклику функція має запитати у того, хто викликає, ім'я та прізвище.
- Використовуючи дані, введені користувачем, створити об'єкт `newUser` із властивостями `firstName` і `lastName`.
- Додати в об'єкт `newUser` метод `getLogin()`, який повертатиме першу літеру імені користувача, 
    з'єднану з прізвищем користувача, усе в нижньому регістрі (наприклад, `Ivan Kravchenko → ikravchenko`).
- Створити користувача за допомогою функції `createNewUser()`. Викликати в користувача функцію `getLogin()`. 
    Вивести в консоль результат виконання функції.
*/
function createNewUser() {
  const nameImput = prompt("Ведіть ім'я");
  const lastNameImput = prompt("Ведіть призвіще");

  return (newUser = {
    name: nameImput,
    lastName: lastNameImput,
    getLogin: function () {
      return this.name.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    },
  });
}

const john = createNewUser();

console.log(john);
console.log(john.getLogin());
