// фільтр за userId
// ТЗ: Поле вводу userId (1–10). Після зміни — GET /posts?userId=...&_limit=5.

const URL = "https://jsonplaceholder.typicode.com";

const input = document.querySelector(`#input`);
const list = document.querySelector(`#list`);

async function load(inputValue) {
  const res = await fetch(`${URL}/posts?userId=${inputValue}&_limit=5`);
  const posts = await res.json();
  // posts.forEach((post) => {
  //   const li = document.createElement("li");
  //   li.textContent = post.title;
  //   list.append(li);
  // });
  list.innerHTML = posts.map((p) => `<li>${p.title}</li>`).join("");
}
input.addEventListener("input", (event) => load(event.target.value));
load(input.value);
