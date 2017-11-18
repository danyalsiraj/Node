// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('it worked'); //will resolve after 2.5s
//     reject('it did not work');
//   }, 2500);
// });
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });


var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 3000);
  });
};

asyncAdd(5, 2).then((sum) => {
  console.log('Result: ', sum);
}, (errorMessage) => {
  console.log(errorMessage);
});
