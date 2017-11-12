console.log('Starting App.js');
const fs= require('fs'); // get the contents of fs module and store them in fs constant
const os=require ('os');
const myModule=require('./notes.js');//since we creted the file we have to identify the diretory

var user= os.userInfo();

//console.log(user);//prints out userInfo
//fs.appendFile('testFile.txt','hello '+user.username+'!!');// creates new filea and writes info in it
// fs.appendFile('testFile.txt',`hello ${user.username} !!`);//another way to write the above satement, sae result
//fs.appendFile('testFile.txt',`Hello ${user.username} ! You are ${myModule.age} years old.`);

// var res= myModule.addNote();
// console.log(res);
var sum=myModule.addInts(5,15);
console.log(sum);
