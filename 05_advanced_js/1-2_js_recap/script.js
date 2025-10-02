let name = "Ivan";
let surname = "Ivanov";
const age = 10;

/** data types:
 * 1. Object // { name: "Ivan", age: 10, hasChildren: true, hobbies: ["football", "music", "dance"] }
 * 2. String "...", '....', `text ${age}`
 * 3. Number 10, 100, 0.5..
 * 4. null // нічого, або значення не відоме
 * 5. undefined // "значення не було присвоєно"..
 * 6. BigInt велике число від -2^53 дл 2^53
 * 7. Symbol
 * 8. Boolean true/ false
 */

/** arithmetical operations
 * +
 * -
 * /
 * *
 * %
 */

/*** user interaction
 * prompt - input
 * alert - information notification( modal). button "ok".
 * confirm - ok, cancel.
 *
 */

/** concat
 * "string 1" + "string 2 " = "string 1string 2"
 *
 */

/**
 * більше менше a > b a < b
 * >= <=
 * == // ===
 * "10" == 10 true
 * "10" === 10 false
 *
 * !
 * !==
 */

/**
 * &&
 * ||
 */

/*
* if (condition) {
      todo something  
      } else {to do something else}
*



*/

/**
 * const user = "admin"
 * switch (user) {
 * case admin: {
 *         to do something
 * clg("welcome")
 * break;
 * }
 * case support: {
 * clg(access denied)
 * break }
 * default: {
 * "user not provider"
 * }
 *
 */

/** Loops
 * for (let i=1; i<=5; i++ ) {
 * clg(i)
 * }
 *
 * let count = 1;
 * while (count <= 1) {
 * clg(count);
 * count++;
 * }
 *
 * let number = 1;
 * do {
 * clg(number )
 * number++;
 * } while (number <= 1)
 *
 */

/**arrays
 *
 * let array = ["one", 1, true, [1, 2], {name: John}]
 *
 * forEach,
 * map,
 * slice,
 * reduce,
 * pop,
 * shift,
 * unshift,
 * filter,
 * find
 *
 *
 */

/*functions 

function showMessage() {
alert("hello world")
}

const showMessage = () => {
    alert("hello world")}


 function showMessage(message, count) {
 alert(message);
 }   

 showMessage("Hello new world", 10)
 showMessage("By ")
 showMessage("how are u")

*/

/** Objects
 * const user = {
 * name: "john",
 * accessLevel: "user"
 * age: 24,
 * changeAccessLevel: function (newValue) {
 * this.accessLevel = newValue;
 * }
 * }
 * user.name
 *
 * user.changeAccessLevel("admin")
 */

/** String methods
 *
 * let name = "Ivan Ivanov Petro";
 *  name.includes("Petro") => true / false
 * name.toLowerCase()
 * name.toUpperCase()
 *
 * name.slice(start, end)
 *
 */

/** DOM - document object model
 *
 * document.
 *
 * document.querySelector(#, ., tag)
 * document.querySelectorAll(., tag)
 *
 * getElementById()
 * getElementsByClassName()
 * getElementsByTagName()
 *
 * const body = document.querySelector(body);
 * const el = document.createElement(tagName)
 *
 * body.append(el)
 *
 * append => після останоьго дочірнього елемента
 * prepend => перед перши дочірнім елементом
 * before => вставить перед самим елементом
 * after =Ю вставить після самого елементу
 * replaceWith
 *
 * ===== before new child ====
 *  <div class="parent">
 *   ===== prepend new child ====
 *      <div class="child">child1</div>
 *      <div class="child">child2</div>
 *      ===== append new child ====
 *  </div>
 *  * ===== after new child ====
 */
