const utils = require('./utils');

it('should add two numbers', () => {
  var result = utils.add(10, 15);
  //  throw new Error('value not correct');
  if (result !== 25) { //incase add function does not work asexpected
    throw new Error(`expected 25, actual ${result}`)
  }
});

it('should square the number', () => {
  var result = utils.square(5);
  if (result !== 25) {
    throw new Error(`expected 25, actual ${result}`);
  }
})
