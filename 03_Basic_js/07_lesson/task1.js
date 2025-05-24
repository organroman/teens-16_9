/**
 * Задание 1.
 *
 * Создать объект пользователя, который обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * А также одним методом sayHi, который выводит в консоль сообщение 'Привет.'.
 */

/**
 * Задание 2.
 *
 * Расширить функционал объекта из предыдущего задания:
 * - Добавить метод, который меняет значение указанного свойства объекта.
 *
 * Продвинутая сложность:
 * Метод должен быть «умным» — он генерирует ошибку при совершении попытки
 * смены значения несуществующего в объекте свойства.
 */

/**
 * Задание 3.
 *
 * Расширить функционал объекта из предыдущего задания:
 * - Добавить метод, который добавляет объекту новое свойство с указанным значением.
 *
 * Продвинутая сложность:
 * Метод должен быть «умным» — он генерирует ошибку при создании нового свойства
 * свойство с таким именем уже существует.
 */

const user = {
  name: "Hermann",
  lastName: "Sokolov",
  job: "none",
  sayHi: function () {
    console.log(`Превіт мене зовуть ${this.name} ${this.lastName}`);
  },

  updateProperty: function (propertyName, propertyValue) {
    if (this.hasOwnProperty(propertyName)) {
      this[propertyName] = propertyValue;
    } else throw new Error(`Помилка властивості ${propertyName} Не існує`);
  },

  addProperty: function (propertyName, propertyValue) {
    console.log(propertyName);
    console.log("this", this);

    if (this.hasOwnProperty(propertyName)) {
      throw new Error(`Помилка. властивість ${propertyName} вже існує`);
    } else this[propertyName] = propertyValue;

    console.log("this[propertyName]", this[propertyName]);
  },
};

// user.sayHi();
// console.log(user);

user.updateProperty("name", "Mykola");
user.addProperty("email", "Mkl@gmail.com");

let propertyName = "job";
user[propertyName];

console.log(user);
