const fs = require("fs");

const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Output");
}

//node index.js add orange.txt 'this is color and fruit'
//node index.js remove orange.txt
