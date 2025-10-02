//  instance user: methods
// POST /users == create new user
// DELETE /users/1 == delete user with id = 1
// GET users/2 == get user with id = 2;
// GET users == get all users

// PUT/ PATCH users/2 body { username: new user name}

// 1. GET  all users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log("users:", data))
  .catch((err) => console.log(err));

//.2 GET all comments to certain post

fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((res) => res.json())
  .then((data) => console.log("comments to post #1:", data))
  .catch((err) => console.log(err));

// 3. Create new post

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My first post",
    body: "Test description",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("new post", data))
  .catch((err) => console.log(err));

// 3. Update current post

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My first updated post",
    body: "Test updated description",
    userId: 1,
    id: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("updated post", data))
  .catch((err) => console.log(err));

// 4. delete post

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => {
    if (res.ok) {
      console.log("post has been deleted");
    } else console.log("something went wrong");
  })
  .catch((err) => console.log(err));
