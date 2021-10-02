// SETS - store unique values of any type

const set1 = new Set();

// add values to set

set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // did not add again. only 4 items in this set. must be unique values.

const set2 = new Set([1, true, 'string']);

console.log(set1);
console.log(set2);

// get count
console.log(set1.size); // 4 items in set

// check for vlaues
console.log(set1.has(100)); // bool true since 100 is in the set.
console.log(set1.has(50 + 50)); // also true
console.log(set1.has({name: 'John'})); // false because it is referncing an object, not a primitive.

// delete from set
set1.delete(100);

console.log(set1);

// INTERATING THROUGH SETS

// for..of loop. will return each item in set independantly.
for(let item of set1) {
    console.log(item);
}

// foreach loop
set1.forEach((value) => {
    console.log(value);
})

// convert set to array

const setArr = Array.from(set1);

console.log(setArr);