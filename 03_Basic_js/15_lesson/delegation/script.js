const board = document.querySelector(".board");

let prevTarget = null;
console.log("🚀 ~ prevTarget:", prevTarget);

const handler = (event) => {
  if (prevTarget) {
    const defaultColor =
      document.documentElement.style.getPropertyValue("--cellColor");

    prevTarget.innerText = "";
    prevTarget.style.setProperty("--cellColor", defaultColor);
  }

  event.target.innerText = "X";

  event.target.style.setProperty("--cellColor", "deepskyblue");
  prevTarget = event.target;

  console.log("🚀 ~ prevTarget:", prevTarget);
};
board.addEventListener("click", handler);
