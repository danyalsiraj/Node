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

// asyncAdd(5, 2).then((sum) => {
//   console.log('Result: ', sum);
//   return asyncAdd(sum, 33);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((sum) => {
//   console.log('result: ', sum);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

//the above can still calls the second then even if the first one is rejected
//to fix that we need to use catch, see below
asyncAdd(5, 2).then((sum) => {
  console.log('Result: ', sum);
  return asyncAdd(sum, 33);
}).then((sum) => {
  console.log('result: ', sum);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
