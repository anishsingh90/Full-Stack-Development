const app = require("./app");

const arr = [2, 4, 3, 7, 1, 3, 8, 5];

let result = arr.filter((item) => {
  return item === 3;
});

console.log(result);
