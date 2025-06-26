const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
});

const btn = document.querySelector("button");
const nameInp = document.querySelector("#name");
const surnameInp = document.querySelector("#surname");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(nameInp.value);
  console.log(surnameInp.value);
  console.log(event.target);
});
