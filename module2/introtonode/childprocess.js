//childprocess.js
let cp = require("child_process");
//console.log(cp);
//open calculator with the help of the file
// for windows replace gome-calculator with calc
//cp.execFileSync("calc");
//open vscode with child process
//cp.execSync("code");
let content = cp.execSync('node test.js');
//console.log('output of the test.js file:'+ content);
// if we dont provide a string then=
 //console.log(content);

 //with string
 console.log(""+content);