const cart = document.querySelector(".cart");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

const handler = (event) => {
  event.stopPropagation();
  console.log(`event.target: ${event.target.nodeName}`)
        // event.currentTarget: ${event.currentTarget.nodeName}`);
};

const globalHandler = (event, globalTarget) => {
//   event.stopPropagation();
  console.log(event.target);
  console.log(`event.target: ${event.target.nodeName}
        event.currentTarget: ${globalTarget}`);
};

window.addEventListener("click", (event) => globalHandler(event, "window"));
// document.addEventListener("click", () => globalHandler("document"));

// document.body.parentElement.addEventListener("click", handler);
// document.body.addEventListener("click", handler);

cart.addEventListener("click", handler);
// cart.addEventListener("click", handler);
