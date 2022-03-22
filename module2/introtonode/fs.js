let fs=require('fs');    //fs.js
 //console.log(fs);

let path=require('path');


 let filePath = path.join(__dirname,'file.txt');
//console.log(filePath);

//it creates file it does not exists and if exist then overwrites it
//fs.writeFileSync(filePath,'again writing on existing file');

// R- READ
//let content= fs.readFileSync(filePath,'utf-8');
//console.log(content);

// U- uPDATE
//fs.appendFileSync(filePath,'utf-8');
//console.log(content);

//delete= D
//fs.unlinkSync(filePath);

//Directory
//create a directory
fs.mkdirSync("hamariDirectory");

//if(){                              //if error doesnt exists 
   // fs.mkdirSync("hamariDirectory")


// how to check  a dir exist
//using fs.existsSync()

// if(!fs.existsSync("hamariDirectory"));
//  fs.mkdirSync("hamariDirectory");
//  // if exist it will leave or else it will create 

//  //read a dir
//  let folderPath= __dirname;
//  let contentOfFolder= fs.readdirSync(folderPath);
//  console.log(contentOfFolder);

//  // Delete a Directory
//  fs.rmdirSync("hamariDirectory");

 // copy a file
 let sourcePath= path.join(__dirname,'file.txt');
 let destinationPath= path.join(dirname,"module","file.txt");
 console.log(sourcePath);
 console.log(destinationPath);

 fs.copyFileSync(sourcePath,destinationPath);