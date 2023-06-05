const { writeFile, writeFileSync } = require("fs");

const data = "This is new Data";

writeFile('hi3.txt', data, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Done");
})