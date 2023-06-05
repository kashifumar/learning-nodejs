// const http = require("http");
import http from 'http';
import fs from 'fs';

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");
  // res.write("Hello World");
  // res.end("THE END");
  // res.end("<h1>Hello World</h1>");
  let path = "./"; //current directory

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }
  // fs.readFile("./index.html", (err, data) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    }
    else {
      res.end(data);
    }

  });

});
server.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));;