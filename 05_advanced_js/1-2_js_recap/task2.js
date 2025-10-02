/* ------------------------------------------------------------------
  ЗАДАЧА 10. "To-Do Lite (модель без зберігання)"
  Опис: Менеджер списку: add, toggle, remove, filter({priority,status}).


  */
function createToDo() {
  let id = 1;
  const items = [];
  return {
    add(text, priority) {
      let trim = text.trim();
      if (!trim) return;
      const item = { id: id++, title: trim, priority: priority, done: false };
      items.push(item);
      return item;
    },
    toggle(itemId) {
      const item = items.find((item) => item.id === itemId);
      if (item) {
        item.done = !item.done;
      }
      return item || null;
    },

    allTAskList() {
      return [...items];
    },
    remove(itemId) {
      let idx = items.findIndex((i) => i.id === itemId);
      if (idx === -1) {
        return;
      }
      items.splice(idx, 1);
    },
    filter({ priority = "all", status = "all" } = {}) {
      return items.filter((item) => {
        // let byPriority;
        // if (priority === "all") {
        //   byPriority = true;
        // } else {
        //   item.priority === priority;
        // }

        const byPriority =
          priority === "all" ? true : item.priority === priority;
        const byStatus =
          status === "all" ? true : status === "done" ? item.done : !item.done;
        return byPriority && byStatus;
      });
    },
  };
}

const todo = createToDo();

todo.add("Винести сміття", "low");
todo.add("task2", "low");
todo.add("task3", "low");
todo.add("Помити посуд", "high");
todo.add("task4", "high");
todo.add("task5", "high");
todo.add("task6", "high");

todo.toggle(2);
todo.toggle(6);

const items = todo.allTAskList();

// todo.remove(1);

const filteredItems = todo.filter({ status: "undone" });

todo.toggle(2);

console.log(filteredItems);

const body = document.querySelector("body");

const ul = document.createElement("ul");

items.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = ` <div">
  <p>${item.title}</p>
  <p>${item.done === true ? "V" : "X"}</p>
  <button data-id="${item.id}">${
    item.done === true ? "Повернути" : "Виконати"
  }</button>
  </div>`;

  const btn = document.querySelector("button");
  //   btn.addEventListener("click", function () {
  //     if (btn.closest(item)) {
  //       todo.toggle(item.id);
  //     }
  //   });

  ul.append(li);
});

body.append(ul);

ul.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const updated = todo.toggle(id);

  if (!updated) return;

  const li = btn.closest("li");
  li.innerHTML = ` <div">
  <p>${updated.title}</p>
  <p>${updated.done === true ? "V" : "X"}</p>
  <button data-id="${updated.id}">${
    updated.done === true ? "Повернути" : "Виконати"
  }</button>
  </div>`;
});
