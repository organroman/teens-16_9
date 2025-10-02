// синтаксис fetch

// fetch(url)
//   .then((response) => {
//     // обробка відповіді
//   })
//   .catch((err) => {
//     // обробка помилки
//   });

// const url = `https://api.example.com/users?role=student&active=true`;

// base url - https://api.example.com/users
// ?role=student&active=true
// role=student
// active=true

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(`Something went wrong -> ${error}`));

const baseUrl = "https://jsonplaceholder.typicode.com/comments";
const postId = 6;

fetch(`${baseUrl}?postId=${postId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error, ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(`Something went wrong -> ${error}`));
