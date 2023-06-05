const { appendFile } = require('fs');

const data = "This is new Data";

try {
  appendFile("ap.txt", data, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Done");
  });
} catch (error) {
  console.error(error);
}