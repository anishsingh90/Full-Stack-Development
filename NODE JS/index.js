const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

fs.rename(filePath, `${dirPath}/fruit.txt`, () => {
  if (!err) console.log("file name is updated");
});
