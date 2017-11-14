//this will always pring them one after another
// console.log('Startng App');
// console.log('Finishing App');

//following is async
console.log('Starting app'); //prints
setTimeout(() => {
  console.log('first callBack with 2s delay'); //waits 2s before printig this while it continuoes with the rest
}, 2000); //delay of 2000 ms
setTimeout(() => {
  console.log('second call back with 0s delay');
}, 0);
console.log('Finishing app'); //prints this befro printhing the above satement
