// // es5
// const sayHello = function () {
// 	console.log('Hello');
// };

// // Arrow function
// const sayHello = () => {
// 	console.log('Hello');
// };

// // One line arrow function does not need curly braces
// const sayHello = () => console.log('Hello.');

// // One line returns
// const sayHello = () => 'Hello';

// same as above
// const sayHello = function () {
// 	return 'Hello';
// };

// // object literal needs to be wrappedn in parantheses
// const sayHello = () => ({ msg: 'Hello' });

// // single param
// const sayHello = (name) => console.log(`Hello ${name}`);

// // Multiple params
// const sayHello = (firstName, lastName) =>
// 	console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function (name) {
// 	return name.length;
// });

// // shorter
// const nameLengths = users.map((name) => {
// 	return name.length;
// });

// shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
