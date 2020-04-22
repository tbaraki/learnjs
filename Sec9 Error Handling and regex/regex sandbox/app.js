let re;
re = /hello/;
re = /hello/i; // i means case insensitive

// console.log(re);
// console.log(re.source);

// // exec() = Return result in an array or null
// const result = re.exec('brad says hello');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // test() = Returns true of false
// const result = re.test('Hello');

// console.log(result);

// // match() = return result array or null
// const str = 'Hello there';
// const result = str.match(re);

// console.log(result);

// // search() = returns the idnex of the first match, if not found resturns -1
// const str = 'Hello there';
// const result = str.search(re);

// console.log(result);

// replace() = return a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');

console.log(newStr);
