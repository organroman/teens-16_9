/**
 * Задание 1.
 *
 * При загрузке страницы посмотреть - есть ли в localStorage значение по ключу userName?
 * Если есть - выводить сообщение "Hello, userName" на экран,
 * где вместо userName должно быть вставлено значение по одноименному ключу в localStorage
 * Если значения по такому ключу нет - спросить у пользователя имя, модальным окном, записать его в localStorage.
 * После этого вывести сообщение "Hello, userName" на экран,
 * где вместо userName должно быть вставлено значение по одноименному ключу в localStorage
 */

const localStorageData = localStorage.getItem("userName");

if (localStorageData) {
  alert(`Hello ${localStorageData}`);
} else {
  const userName = prompt("Введіть свій юзернейм");
  localStorage.setItem("userName", userName);
  alert(`Hello ${userName}`);
}
