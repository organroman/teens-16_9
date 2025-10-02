// ТЗ: На сабміт відправити POST /posts з {title, body, userId:1}. Показати відповідь.

const URL = "https://jsonplaceholder.typicode.com";

const form = document.querySelector("#form");
const output = document.querySelector("#out");
form.onsubmit = async (e) => {
  e.preventDefault();
  const data = { title: form.title.value, body: form.body.value, userId: 1 };
  const response = await fetch(`${URL}/posts`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  output.textContent = JSON.stringify(result);
  form.reset();
};
