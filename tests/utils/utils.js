//channge the test in package.json to     "test": "mocha **/*.test.js" so it runs all tests

add = (a, b) => {
  return (a + b);
}
square = (a) => {
  return a * a;
}
setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}
asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000); //if time out is more than 2s mocha assumes the test failed
};
asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
};
module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare
}
