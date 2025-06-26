document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded (without styles and images");
});

window.addEventListener("load", () => {
  console.log("DOM Fully loaded including images and styles");
});

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   e.returnValue = "";
//   return "";
// });

//event.code event.key
const input = document.querySelector("#input");

//keydown // keyup

input.addEventListener("keydown", (e) => {
  console.log(` keydown: key=${e.key}, code=${e.code}`);
});

input.addEventListener("keyup", (e) => {
  console.log(`keyup: key=${e.key} code=${e.code}`);
});

const screen = document.querySelector("#screen");
const coord = document.createElement("p");

coord.innerText = "0px";
screen.append(coord);

window.addEventListener("scroll", () => {
  coord.innerText = `${window.scrollY} px`;
});
