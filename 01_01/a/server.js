const http = require("http");
const HOSTNAME = global.process.env.HOSTNAME || "localhost";
const PORT = global.process.env.PORT || "3000";

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
  console.log(`dir name ${__dirname}`);
  console.log(`file name ${__filename}`);
});