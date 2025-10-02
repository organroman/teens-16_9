/** 🔹 Завдання 3. Симуляція асинхронної операції
Створи функцію fakeOperation(success), яка повертає Promise.
Якщо success === true, через 1 секунду resolve("Операція успішна").
Якщо success === false, через 1 секунду reject("Сталася помилка").
Підказка
Використай конструктор Promise.
Всередині setTimeout викликай resolve або reject. 
*/
function fakeOperation(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Вай маладец");
      } else {
        reject("Спробуйте раніше");
      }
    }, 1000);
  });
}
fakeOperation(false)
.then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
}
)