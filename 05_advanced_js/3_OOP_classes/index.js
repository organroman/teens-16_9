// // class - шаблон для створення об'єкту;
// class Car {
//   constructor(brand, year) {
//     // це метод, запускається автоматично, коли створ.ємо екземпляр обʼєкту
//     this.brand = brand;
//     this.year = year;
//   }
//   drive() {
//     // методи
//     console.log(`${this.brand} їде`);
//   }
//   startEngine() {
//     console.log("engine is started");
//   }
// }

// const toyota = new Car("Toyota", 2025);
// const audi = new Car("Audi", 2025);
// toyota.drive();
// audi.drive();
// audi.startEngine();

// console.log(Car.prototype);

// // getter & setter

// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 2) {
//       throw "Name is too short";
//     } else this._name = value;
//   }
// }
// const anna = new User("A");
// console.log("Object anna", anna); // show full object
// console.log("anna name", anna.name); // show property name
// anna.name = "AnNA"; // chnage property name
// console.log("anna after changing name", anna);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   sound() {
//     console.log("Якась тварина робить звук");
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   sound() {
//     console.log(`${this.name} гавкає`);
//   }
// }
// const rex = new Dog("Rex", "Husky");
// rex.sound();

// class MathHelper {
//   static add(a, b) {
//     return a + b;
//   }
// }
// console.log(MathHelper.add(5, 10));

class Product {
  constructor(price, article, name, fullname) {
    this.price = price;
    this.article = article;
    this.name = name;
    this.fullname = fullname;
  }

  getDiscount(value) {
    return this.price * (1 - value / 100);
  }
  calcDelivery() {
    return this.price * 0.01;
  }
}

class Notebook extends Product {
  constructor(battery, screen, memory, price, article, name, fullname) {
    super(price, article, name, fullname);

    this.battery = battery;
    this.screen = screen;
    this.memory = memory;
  }
  calcDelivery() {
    const basicDelPrice = super.calcDelivery();
    return basicDelPrice + this.price * 0.05;
  }
}

class Phone extends Product {
  constructor(nfc, os, ...args) {
    super(...args);
    this.nfc = nfc;
    this.os = os;
  }
}

const lenovo = new Notebook(
  "4000mA",
  "15,6",
  "16Gb",
  20000,
  "FX22",
  "Lenovo X1204",
  "Lenovo X1204 (ZJFS1RT)"
);

// console.log(lenovo);
// console.log(lenovo.price);
// console.log(lenovo.getDiscount(5));
// console.log(lenovo.calcDelivery());

const xiaomi = new Phone(
  true,
  "Android 10.0",
  10000,
  "HJfdk",
  "Xiaomi Redmi",
  "Xiaomi Redmi (BHJBHFY)"
);

// console.log(xiaomi);
// console.log(xiaomi.price);
// console.log(xiaomi.getDiscount(12));
// console.log(xiaomi.calcDelivery());

/**
 *  Створіть клас Book з полями: title, author, year.
 *   Додайте метод info(), який повертає рядок: "Назва — Автор (Рік)".
 *   Створіть кілька книг і виведіть інформацію.
 *
 */

//   Створіть клас Person з властивостями name, _age.
//   зробіть get age() для доступу;
//   зробіть set age(value), який не дозволяє ставити від’ємний вік.

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw "Your age is imposible";
    } else {
      this._age = value;
    }
  }
}

const person1 = new Person("Bogdan", 13);

console.log(person1.age);

const person2 = new Person("Vlad", -45);

console.log(person2.age);

person2.age = 20;

console.log(person2.age);
person2.age = 30;

console.log(person2.age);
