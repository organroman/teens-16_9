const title = document.getElementById("title");
console.log(title);

const description = document.getElementsByClassName("description");
console.log("🚀 ~ description:", description);

const cardByName = document.getElementsByName("demo-card");
console.log("🚀 ~ cardByName:", cardByName);

const paragrphs = document.getElementsByTagName("p");
console.log("🚀 ~ paragrphs:", paragrphs);

const firstText = document.querySelector(".text");
console.log("🚀 ~ firstText:", firstText);

const allText = document.querySelectorAll(".text");
console.log("🚀 ~ allText:", allText);

// Styles "styles", "classname", "classList"

console.log(firstText.className);

console.log(firstText.classList.contains("text"));
firstText.classList.add("highlight");

firstText.style.color = "red";
firstText.style.fontWeight = "bold";

console.log("inner HTML", firstText.innerHTML);
console.log(("outter HTML", firstText.outerHTML));
console.log("textContent", firstText.textContent);

const listItems = document.querySelectorAll(".item");

listItems.forEach((item, i) =>
  console.log(`item with Number${i + 1}, ${item.textContent}`)
);
