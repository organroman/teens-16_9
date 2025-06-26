/**
 * При натисканні на enter в полі вводу
 * додавати його значення, якщо воно не пусте,
 * до списку задач та очищувати поле вводу
 *
 * При натисканні Ctrl + D на сторінці видаляти
 * останню додану задачу
 *
 * Додати можливість очищувати весь список
 * Запустити очищення можна двома способами:
 * - при кліці на кнопку Clear all
 * - при натисканні на Alt + Shift + Backspace
 *
 * При очищенні необхідно запитувати у користувача підтвердження
 * (показувати модальне вікно з вибором Ok / Cancel)
 * Якщо користувач підвердить видалення, то очищувати список,
 * інакше нічого не робити зі списком
 *
 */

const inputEl = document.querySelector("#new-task");

const task_list = document.querySelector(".tasks-list");

inputEl.addEventListener("keyup", function (event) {
  if (event.code === "Enter" && inputEl.value !== "") {
    const newLi = document.createElement("li");
    newLi.textContent = inputEl.value;
    task_list.append(newLi);
    inputEl.value = "";
  }
});
window.addEventListener("keyup",function(event){
    if (event.ctrlKey && event.code === "KeyD"){
        const last_li = document.querySelector("li:last-child")
        if(last_li){
            last_li.remove()
        }
    }
})
