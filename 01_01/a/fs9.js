const { rename } = require("fs");
rename("hi.txt", "hello.txt", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("File Renamed");
});