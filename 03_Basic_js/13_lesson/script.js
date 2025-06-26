// const div = document.createElement("div");
// div.insertAdjacentHTML(
//   "beforeend",
//   `<input value="click me" onClick=alert("Clicked") type="button"/>`
// );

// document.body.prepend(div);

// addEventListener = 'click', "mousemove", function

// const btn = document.createElement("button");
// btn.textContent = "click me";

// btn.addEventListener("click", function () {
//   console.log("btn just was clicked");
// });

// document.body.prepend(btn);

const div2 = document.createElement("div");

document.body.append(div2);

function oneTimeClick() {
  console.log("Ця подія станется один раз");
  div2.removeEventListener("click", oneTimeClick);
}

div2.addEventListener("click", oneTimeClick);

// div2.addEventListener("mousemove", (e) => {
//   console.log(`move: ${e.clientX}, ${e.clientY}`);
// });

div2.addEventListener("mouseover", () => {
  console.log(`mouseover`);
});
div2.addEventListener("mouseout", () => {
  console.log(`mouseout`);
});

div2,
  addEventListener("dblclick", () => {
    console.log("dbclick");
  });

div2,
  addEventListener("contextmenu", () => {
    console.log("contextmenu");
  });

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "type somithing");

document.body.append(input);

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

input.addEventListener("focus", () => {
  console.log("focus");
});

input.addEventListener("blur", () => {
  console.log("blur");
});

const inputPrompt = prompt("Введіть щось")
console.log("🚀 ~ inputPrompt:", inputPrompt)
