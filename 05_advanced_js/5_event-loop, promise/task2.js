/** 🔹 Завдання 2. Відкладене повідомлення
Напиши функцію showMessage(msg, delay), яка виводить повідомлення через delay мілісекунд.
Підказка
Використай setTimeout.
Можна викликати кілька разів для різних повідомлень
*/
function showMessage(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}
showMessage("Костя косий ",1000)
showMessage("Костя виправися ",2000)

