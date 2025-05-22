// let fruits = ["apple", "orange", "banana"];

// console.log(fruits[1]);
// console.log(fruits.length);

// for (let fruit of fruits) {
//   console.log(fruit);
// }

const nums = [1, 2, 3, 4];
console.log("🚀 ~ nums:", nums);

const doubled = nums.map((number) => number * 2);
console.log("🚀 ~ doubled:", doubled);
console.log("🚀 ~ nums after doubling:", nums);

// const even = nums.filter((number) => number % 2 === 0);
// console.log("🚀 ~ even:", even);

// const number2 = nums.find((n) => n === 2);
// console.log("🚀 ~ number2:", number2);

// const colors = ["red", "blue", "green"];
// const isExist = colors.includes("blue");
// console.log("🚀 ~ isExist:", isExist);

// const sum = nums.reduce((acc, val) => acc + val, 0);
// console.log("🚀 ~ sum:", sum);

// const index = nums.indexOf(4);
// console.log("🚀 ~ index:", index);

// colors.forEach((c, index) => {
//   console.log(`value=${c}, number=${index + 1}`);
// });

let fruits = ["apple", "orange"];
console.log("🚀 ~ fruits:", fruits);

// Додати в кінець масиву
fruits.push("banana");

console.log("🚀 ~ fruits => after adding banana:", fruits);

//  Видалити останній елемент масиву
const lastFruit = fruits.pop();

console.log("🚀 ~ lastFruit:", lastFruit);
console.log("🚀 ~ fruits after pop:", fruits);

//  Видалити перший елемент масиву
const firstFruit = fruits.shift();
console.log("🚀 ~ firstFruit:", firstFruit);
console.log("🚀 ~ fruits after shift:", fruits);

// Додати в початок масиву
fruits.unshift("kiwi");

console.log("🚀 ~ fruits after unshift:", fruits);