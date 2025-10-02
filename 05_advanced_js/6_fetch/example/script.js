const root = document.querySelector("#root");

const createElement = (tag, className, content) => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = content;

  return element;
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((posts) => {
    posts.forEach((post) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => response.json())
        .then((user) => {
          const postElement = createElement("div", "post");
          const postTitle = createElement("h3", "title", post.title);

          const postBody = createElement("p", "post__body", post.body);
          const authorElement = createElement("div", "author");
          const authorName = createElement("p", "author__name", user.name);
          const authorUsername = createElement(
            "p",
            "author__username",
            `@${user.username}`
          );

          postElement.append(postTitle);
          postElement.append(postBody);

          authorElement.append(authorName);
          authorElement.append(authorUsername);
          postElement.append(authorElement);

          root.append(postElement);
        })
        .catch((err) => console.error(err));
    });
  })
  .catch((error) => console.error(error));
