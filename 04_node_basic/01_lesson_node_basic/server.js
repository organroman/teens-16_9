import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hey, this is our first server");
});

server.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
