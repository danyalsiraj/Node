const _= require('lodash');// _ is a common name for lodash utility library
console.log(_.isString(1));//check if its string or not
console.log(_.isString('abc'));
console.log(_.uniq([1,3,5,9,7,1,3,5]));//returns the array without the repeated numbers
console.log(_.uniq([1,'danyal',2,3,'danyal',1,'a','c','d','a']));
