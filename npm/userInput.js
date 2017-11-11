const fs=require('fs');
const _= require('lodash');

const notes=require('./notes.js');

var command=process.argv[2];// fetches th user input from command line at argument 3, arg1 is node, arg 2 is the file name
console.log('Command is ',command);

if (command==='add'){
  console.log('Adding notes');
}
else if (command==='remove'){
  console.log('Removing notes');
}
else if(command==='list'){
  console.log('Listing notes');
}
