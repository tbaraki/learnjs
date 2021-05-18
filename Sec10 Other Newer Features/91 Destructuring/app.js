// destructuring assignment

let a, b;
[a, b] = [100, 200];

// rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500})

console.log(a,b);

// array destructuring
const people = ['John', 'Beth', 'Mike']

const [person1, person2, person3] = people;

console.log(person1,person2,person3);

// parse array returned from function
function getPeople () {
    return ['John', 'Beth', 'Mike']
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();

console.log(person1,person2,person3);

// object destructuring
