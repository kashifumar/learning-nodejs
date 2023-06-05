const fs = require("fs");
fs.readFile("hi.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

});

console.log("Log From Outside");