/**
 * При натисканні на enter в полі вводу
 * додавати його значення, якщо воно не пусте,
 * до списку задач та очищувати поле вводу.
 *
 * //також біля задачі мають бути дві кнопки - "Done" і  "Remove".
 * //по кліку на Done - закреслюваьт текст задачі
 * //по кліку на Remove - видаляти задачу
 *
 * //Использовать делегирование событий при клике на кнопку removeButton и idDoneButton
 *
 *
 * // 3) Если в поле ввода введено более 40 символов - не разрешать вводить символы
 *
 * //При натисканні Ctrl + D на сторінці видаляти
 * // останню додану задачу
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
  if (inputEl.value.length > 40) {
    inputEl.value = inputEl.value.slice(0, 40);
    return;
  }
  if (event.code === "Enter" && inputEl.value !== "") {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${inputEl.value}</span> 
    <button class="doneBtn">Done</button> 
    <button class="removeBtn">Remove</button>`;
    task_list.append(newLi);
    inputEl.value = "";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.ctrlKey && event.code === "KeyD") {
    const last_li = document.querySelector("li:last-child");
    if (last_li) {
      last_li.remove();
    }
  }
});

task_list.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (event.target.classList.contains("doneBtn")) {
    const taskDesc = li.querySelector("span");
    taskDesc.style.textDecoration = "line-through";
  } else if (event.target.classList.contains("removeBtn")) {
    li.remove();
  }
});

function sure() {
  const resualt = confirm("Точно видалити задачі?");
  if (resualt === true) {
    task_list.innerHTML = ``;
  }
}
const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", sure);