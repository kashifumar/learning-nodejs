const { writeFile, writeFileSync } = require("fs");

const data = "This is new Data";

try {
  writeFileSync('hi3.txt', data, { flag: 'a' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  console.log("Done");

} catch (error) {
  console.error(error);
}