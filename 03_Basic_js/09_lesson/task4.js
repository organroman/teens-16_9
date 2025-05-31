/*## Завдання

Доповнити функцію `createNewUser()` методами підрахунку віку користувача та його паролем. 

#### Технічні вимоги:
- доповніть функцію `createNewUser()` таким функціоналом:
   1. Під час виклику функція має запитати в того, хто викликає, дату народження (текст у форматі `dd.mm.yyyy`) 
        і зберегти її в полі `birthday`.
   2. Створити метод `getAge()` який буде повертати скільки користувачеві років.
   3. Створити метод `getPassword()`, який повертатиме першу літеру імені користувача у верхньому регістрі, 
   з'єднану з прізвищем (у нижньому регістрі) і роком народження. 
   (наприклад, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
- Вивести в консоль результат роботи функції `createNewUser()`, 
    а також функцій `getAge()` і `getPassword()` створеного об'єкта.
*/

function createNewUser() {
  const nameImput = prompt("Ведіть ім'я");
  const lastNameImput = prompt("Ведіть призвіще");
  const userAge = prompt(" Введіть свій вік"); //   31.05.2025
  const userBirth = new Date(userAge.split(".").reverse().join("-")); // 2025-05-31
  console.log("🚀 ~ userBirth:", userBirth);

  return (newUser = {
    name: nameImput,
    lastName: lastNameImput,
    birthday: userBirth,
    getLogin: function () {
      return this.name.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    },
    getAge: () => {
      const currentDate = new Date();

      return Math.floor(
        (currentDate.getTime() - userBirth.getTime()) /
          (1000 * 60 * 60 * 24 * 365)
      );
    },
    getPassword: () => {
      return this.name.charAt(0).toUpperCase() + this.lastName.toLowerCase();
    },
  });
}

const john = createNewUser();

console.log(john.getAge());
