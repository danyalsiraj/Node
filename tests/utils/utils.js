//channge the test in package.json to     "test": "mocha **/*.test.js" so it runs all tests

add = (a, b) => {
  return (a + b);
}
square = (a) => {
  return a * a;
}
module.exports = {
  add,
  square
}
