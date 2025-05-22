// Додати новий фрукт

const fruits = ["apple", "banana"];
fruits.push("kiwi");
console.log("{after push:", fruits);

// Видалити перший елемент
const numbers1 = [10, 20, 30, 40];
numbers1.shift();
console.log("after shift:", numbers1);

// Подвоіти значення:
// 1 За допомогою методу масива
// 2 за допомгою циклу
const nums1 = [1, 2, 3];
const doubled = nums1.map((num) => num * 2);
console.log("doubled:", doubled);

const doubled2 = [];

for (let i = 0; i < nums1.length; i++) {
  doubled2.push(nums1[i] * 2);
}
console.log("🚀 ~ doubled2:", doubled2);

// Показати парні числа із масиву
// 1. Метод масиву
// 2. За допомогою циклу for
// 3. за допомогою циклу for of

const nums2 = [1, 4, 7, 10, 13];
// const even = nums2.filter((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });
// console.log("even:", even);

const even2 = [];

console.log("🚀 ~ even2:", even2);

// const value1 = nums2[0];
// console.log("🚀 ~ value1:", value1);
// const value2 = nums2[1];
// console.log("🚀 ~ value2:", value2);
// const value3 = nums2[2];
// console.log("🚀 ~ value3:", value3);
// const value4 = nums2[3];
// console.log("🚀 ~ value4:", value4);
// const value5 = nums2[4];
// console.log("🚀 ~ value5:", value5);

for (let i = 0; i < nums2.length; i++) {
  const valueOfArray = nums2[i];
  //   console.log(`valueOfArray під індексом ${i} = ${nums2[i]}`);
  if (valueOfArray % 2 === 0) {
    even2.push(valueOfArray);
  }
}
console.log("{even2:", even2);

const hello = "Привіт";
const userName = "Jhon";

// "Привіт, Jhon"

console.log(hello + "," + " " + userName + " " + "It's me Jane" + " " + "Call me");
console.log(`${hello} ${userName} ! fdfgfd  It's me Jane`);
