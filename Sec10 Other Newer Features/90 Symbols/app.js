// create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);

// unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop 1';
myObj[KEY2] = 'prop 2';
myObj.KEY3 = 'prop 3';
myObj.KEY4 = 'prop 4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// symbols are not enumerable in for...in
for(let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

// symbols are ignoored using json.stringify
console.log(JSON.stringify({key: 'prop'}))
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}))