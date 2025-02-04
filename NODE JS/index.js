const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

fs.appendFile(filePath, " and file name is apple.txt", (err) => {
  if (!err) console.log("file is updated");
});
