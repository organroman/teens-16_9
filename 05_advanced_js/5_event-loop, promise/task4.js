/**
 * Ланцюжок промісів
Створи Promise, який через 1 секунду повертає число 5.
У .then помнож його на 2, у наступному .then додай 10.
У фінальному .then виведи результат.
Підказка
Використай resolve у setTimeout.
Передавай результат далі через return.
 * 
 * 
 * 
 * 
 */
console.log("Start");
console.log("Calculating....");
new Promise((resolve) => {
  setTimeout(() => resolve(5), 2000);
})
  .then((result) => result * 2)
  .then((result) => result + 10)
  .then((result) => console.log("Result:", result));

  