console.log('starting notes.js');
// console.log(module);
//module.exports.age = 23;
//function, arrow function
module.exports.addNote=()=>{
  console.log('addNote');
  return 'new note';
}
module.exports.addInts=(a, b)=>{//adds two numbers
  return `${a} + ${b} = ${a+b}`;
}
