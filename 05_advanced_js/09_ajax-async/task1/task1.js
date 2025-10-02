// ТЗ: Зробіть GET /posts?_limit=5, виведіть title у <ul>.

const URL = "https://jsonplaceholder.typicode.com";

(async function(
) {
    const responce = await fetch(`${URL}/posts?_limit=5`)
    const posts = await responce.json()
    const list = document.querySelector("#list")
    posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title
        list.append(li);
    });
})()