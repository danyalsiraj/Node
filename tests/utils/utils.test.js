//use nodemon --exec "npm test" to auto start the test cases
// we can maeke a new script in packae.json to run the above command---"test-watch":"nodemon --exec \"npm test\""
//to run a custom script in command line we need to type---- npm run  scriptName
//expect module allows us to add assertions
const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var result = utils.add(10, 15);
  //  throw new Error('value not correct');
  expect(result).toBe(25).toBeA('number'); //thi is same as the below if statement, also checks if the returned is number

  // if (result !== 25) { //incase add function does not work asexpected
  //   throw new Error(`expected 25, actual ${result}`)
  // }
});

it('should square the number', () => {
  var result = utils.square(5);

  expect(result).toBe(25).toBeA('number');
  // if (result !== 25) {
  //   throw new Error(`expected 25, actual ${result}`);
  // }
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({
    name: 'Danyal'
  }).toEqual({
    name: 'Danyal'
  }); //to compare objects we need to use toEqual
  expect([2, 3, 4]).toInclude(4); //check if the number exists in the array
  expect([2, 3, 4]).toExclude(5); //check if the number does not exitst in array
  //include and exclude work with object properties
  expect({
    name: 'danyal',
    age: '23',
    location: 'canada'
  }).toExclude({
    age: '21'
  })
});

it('check if first and last name are correct', () => {
  var user = {
    age: 23,
    location: 'canada'
  }
  var name = 'Danyal Siraj';
  var result = utils.setName(user, name);
  //expect(user).toEqual(result);
  expect(result).toInclude({
    firstName: 'Danyal',
    lastName: 'Siraj'
  });
});
