/**
 * Задание 1.
 *
 * Получить элемент с классом .remove.
 * Удалить его из разметки.
 *
 * Получить элемент с классом .bigger.
 * Заменить ему CSS-класс .bigger на CSS-класс .active.
 *
 * Условия:
 * - Вторую часть задания решить в двух вариантах: в одну строку и в две строки.
 */
const elToDelete = document.querySelector(".remove")

elToDelete.remove();

const bigger = document.querySelector(".bigger")

// bigger.classList.replace("bigger", "active");
bigger.classList.remove("bigger");
bigger.classList.add("active");