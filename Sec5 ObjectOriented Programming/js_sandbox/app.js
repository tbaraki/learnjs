function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
	// this.calculateAge = function () {
	// 	const diff = (Date.now() = this.birthday.getTime());
	// 	const ageDate = new Date(diff);
	// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// };
}

// calculate age
Person.prototype.calculateAge = function () {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name
Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
	this.lastName = newLastName;
};

const john = new Person("John", "Johnson", "8-12-1990");
const mary = new Person("Mary", "Smith", "5-22-76");

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried("Jones");
console.log(mary.getFullName());
