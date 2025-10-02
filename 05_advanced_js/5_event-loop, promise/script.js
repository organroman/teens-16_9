/**
 * promise
 * 3 стани:
 * - pending (очікування)
 * - fulfilled / resolved( успіх)
 * - rejected - відхилено/ помлика
 *  */

// const promise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Always done in the end.");
//   });

// Settimeout

// console.log("Це початок");

// setTimeout(() => {
//   console.log("Це виконується через 2с ");
// }, 2000);

// console.log("Це кінець");

// // SetInterval

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter++;
//   console.log(`Step ${counter}`);

//   if (counter === 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// Асинхронність

// console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

// console.log("C");

// Event Loop

/***
 * 1. Весь сінхронний код
 * 2. Перевіряж чи є в microtask queue (.then в промісах) - > якщо є - тоді виконати іх
 * 3. далі брати завдання із task queue (settimout )
 * 4. повторювати нескінченно.
 *  */

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

setTimeout(() => console.log("D"), 0);

console.log("E");
// A, E, C, B, D
