//"C:\Users\divan\Desktop\WEB DEV\module2\introtonode"
let path = require("path");
console.log(path);

let extensionName = path.extname("C:\Users\divan\Desktop\WEB DEV\module2\introtonode");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);
// console.log(__dirname);

console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"testing.js");
console.log(newFilePath);