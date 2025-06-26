// Написать ту ду лист.

// Спрашивать у пользователя пункты для добавления в список до тех пор, пока
// он не нажмет отмена. Каждый prompt это новый элемент списка.
// Все пункты вставить на страницу.
// Не забываем про семантику (список должен быть оформлен через ul или ol);
// По клику на элемент списка - удалить этот пункт.
// Подсказка
// elem.onclick = function () {
//     пишем что происходит по клику
//   };

let todoList = [];
let todoItem = prompt("Ведіть задачу");

while (todoItem !== null) {
  todoList.push(todoItem);
  todoItem = prompt("Ведіть наступну задачу");
}
let list = document.querySelector("#list");

todoList.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
  li.onclick = function () {
    li.remove();
  };
});

console.log(todoList);
