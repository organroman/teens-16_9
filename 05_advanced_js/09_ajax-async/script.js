const user = {
  id: 1,
  username: "JohnDoe",
  skills: ["html", "css", "js"],
};

const userJson = JSON.stringify(user); // серіалізація
// console.log("JSON.stringify user", userJson);
// console.log("JSON.stringify user.username");

const userParsed = JSON.parse(userJson); // десеріалізація
// console.log("JSON.parsed user", userParsed);
// console.log("username", userParsed.username);

// async/await example:

// async function fetchData(url, options) {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error(`HTTP ${response.status}`);
//     return await response.json();
//   } catch (error) {
//     console.log("Request failed", error);
//     throw error;
//   }
// }

const URL = "https://jsonplaceholder.typicode.com";

async function getPosts({ limit = 10, userId } = {}) {
  try {
    const params = new URLSearchParams();

    if (limit) params.set("_limit", limit);
    if (userId) params.set("userId", userId);

    const response = await fetch(`${URL}/posts?${params.toString()}`);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// (async () => {
//   const posts = await getPosts({ limit: 3, userId: 1 });
//   console.log(posts);
// })();

async function replacePost(id, data) {
  try {
    const res = await fetch(`${URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// (async () => {
//   const updated = await replacePost(101, {
//     title: "Updated",
//     body: "All replaced",
//     userId: 1,
//   });
//   console.log(updated);
// })();

async function createPost(data) {
  try {
    const res = await fetch(`${URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// (async () => {
//   const newPost = await createPost({
//     title: "Hello",
//     body: "World",
//     userId: 1,
//   });
//   console.log(newPost);
// })();

async function updatePost(id, data) {
  try {
    const res = await fetch(`${URL}/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
// (async () => {
//   const updated = await updatePost(10, {
//     title: "Updated only title",
//   });
//   console.log(updated);
// })();

async function deletePost(id) {
  try {
    const res = await fetch(`${URL}/posts/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// (async () => {
//   const result = await deletePost(1);
//   console.log(result);
// })();
