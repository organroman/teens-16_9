import http from "http";

const facts = [
  "fact 1",
  "fact 2",
  "fact 3",
  "fact 4",
  "fact 5",
  "fact 6",
];

const server = http.createServer((req, res) => {
  const fact = facts[Math.floor(Math.random() * facts.length-1)];
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Fun fact:" + fact);
});

server.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
