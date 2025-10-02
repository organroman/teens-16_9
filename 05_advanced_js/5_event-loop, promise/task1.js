/** Створи функцію, яка приймає число n і за допомогою setInterval виводить у консоль відлік від n до 0. 
 * Коли досягає нуля — зупиняє інтервал і виводить "🚀 Старт!".
Підказка
 * Використай setInterval.
 * Змінюй значення змінної n у кожній ітерації.
 * Використай clearInterval, щоб зупинити таймер.
*/

function countdown(n) {
  const timer = setInterval(() => {
    console.log(n);
    n--;
    if (n ===0) {
      clearInterval(timer);
      console.log("start");
    }
  }, 1000);
}

countdown(5)