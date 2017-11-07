var getUserSync=require('./getUserSync');

console.log('Starting user 1');
var user1=getUserSync('123');
console.log('user1',user1);

console.log('Starting user 2');
var user2=getUserSync('321');
console.log('user2',user2);

var sum=1+2;
console.log('the sum is '+sum);