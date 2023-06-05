const fs = require("fs");
fs.readFile("hi.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data);
  console.log(data.toString());
});