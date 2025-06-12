/**
 * Задание 1.
 *
 * Получить и вывести в консоль следующие элементы страницы:
 * - По идентификатору (id): элемент с идентификатором list;
 * - По классу — элементы с классом list-item;
 * - По тэгу — элементы с тэгом li;
 * - По CSS селектору (один элемент) — третий li из всего списка;
 * - По CSS селектору (много элементов) — все доступные элементы li.
 *
 * Вывести в консоль и объяснить свойства элемента:
 * - innerText;
 * - innerHTML;
 * - outerHTML.
 */

const listById=document.getElementById('list');
console.log (listById);
const byClassName=document.getElementsByClassName('list-item');
console.log (byClassName);
const byTag=document.getElementsByTagName('li');
console.log (byTag);
const querySelector=document.querySelector('li:nth-child(3)');
console.log (querySelector);
const queryAllSelectors=document.querySelectorAll('li');
console.log (queryAllSelectors);
console.log (listById.innerText);
console.log (listById.innerHTML);
console.log (listById.outerHTML);
console.log (listById.textContent);
