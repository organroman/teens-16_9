let count = 1;

while (count <= 5) {
  console.log("While loop:", count);
  count = count + 1;
}

let number = 1;

do {
  console.log("Do While loop:", number);
  number++;
} while (number <= 5);

let numFor = 5;

for (let index = 1; index <= numFor; index++) {
  console.log("For loop:", index);
}

const user = {
  name: "John",
  age: 40,
  userName: "johndoe",
  email: "johndoe@mail.com",
};

for (let key in user) {
  console.log(`for in loop: ${key} = ${user[key]} `);
}

console.log("user name", user.name)
const numbers = [10, 100, 1000, 34];


for (let elem of numbers) {
  console.log("for of loop", elem);
}
