const container = document.querySelector("#container");

const newDiv = document.createElement("div");
newDiv.textContent = "Appended element";
newDiv.className = "demo";

container.append(newDiv);

const newDiv2 = document.createElement("div");
newDiv2.textContent = "Prepended element";
newDiv2.className = "demo";

container.prepend(newDiv2);

const newDiv3 = document.createElement("div");
newDiv3.textContent = "Inserted before target";
newDiv3.className = "demo";

container.before(newDiv3);

const newDiv4 = document.createElement("div");
newDiv4.textContent = "Inserted after target";
newDiv4.className = "demo";

container.after(newDiv4);

const replaceDiv = document.createElement("div");
replaceDiv.textContent = "Replaced div3";
replaceDiv.className = "demo";

newDiv3.replaceWith(replaceDiv);

const htmlString = `
<div class="demo"> HTML inserted with InsertAdjacentHTML</div>`;

container.insertAdjacentHTML("beforebegin", htmlString);
container.insertAdjacentHTML("afterbegin", htmlString);
container.insertAdjacentHTML("beforeend", htmlString);
container.insertAdjacentHTML("afterend", htmlString);

container.lastElementChild.remove();

const cloneEl = replaceDiv.cloneNode(true);
cloneEl.textContent += "(Clone)";
container.append(cloneEl);

const fragment = new DocumentFragment();

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Fragment item ${i}`;
  fragment.append(li);
}

container.append(fragment);
