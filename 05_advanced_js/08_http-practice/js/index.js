import User from "./user.js";
import Post from "./post.js";
import Card from "./card.js";

function displayCard() {
  const root = document.querySelector("#root");
  const preLoader = document.querySelector(".text-center");
  fetch("https://ajax.test-danit.com/api/json/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((element) => {
        const { name, username, email, id } = element;
        const user = new User(name, email, username, id);

        fetch("https://ajax.test-danit.com/api/json/posts")
          .then((response) => response.json())
          .then((posts) => {
            preLoader.style.display = "none";
            const userPosts = posts.filter((post) => post.userId === id);
            userPosts.forEach((postData) => {
              const { id, title, body } = postData;
              const post = new Post(id, title, body);
              const card = new Card(user,post)
              root.append(card.render())
            });
          })
          .catch((err) => console.log(err))

      });
    })
    .catch((err) => console.log(err));

}
displayCard()
