function sum(a, b) {
  return a + b;
}

const sumArr = (a, b) => a + b;

console.log(sumArr(2, 2));

// function isEven(number) {
//   return number % 2 === 0;
// }

const isEven = (number) => number % 2 === 0;

const myFunc = () => {
  ///
  ////
};

const pizza = {
  name: "Margarita",
  addExtras: function (extras) {
    console.log("context of function", this);

    const checkThis = () => console.log("arrow function", this);
    checkThis();
  },
};

/** SPREAD OPERATOR */

const fruits = ["bananas", "apple"];
const moreFruits = [...fruits, "cherry", "orange"];
console.log("🚀 ~ fruits:", fruits);
console.log("🚀 ~ moreFruits:", moreFruits);

const user = { name: "John", age: "30" };
const updatedUser = { ...user, city: "Odesa", email: "jmail@mail.com" };
console.log("🚀 ~ user:", user);
console.log("🚀 ~ updatedUser:", updatedUser);

/** REST OPERATOR */

const [cow, ...rest] = ["cow", "koala", "bear", "rabbit", "wolf", "cat"];

console.log("rest operator cow", cow);
console.log("rest operator rest", rest);

const person = {
  name: "Jane",
  password: 1224353453,
  email: "sone@mail.com",
  age: 12,
  nick: "fdfdsf",
  userName: "fdfdf",
  hobby: ["fdgfdgf","fdgdfgfg"]
};

const {password, ...safePerson} = person;
console.log(safePerson)

// const { name, ...details} = person;
// console.log("🚀 ~ details:", details)

console.log(name);

// console.log(age);
// console.log(hobby);

// person.name
// person.age
// person.hobby
