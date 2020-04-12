class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	greeting() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMarried(newLastName) {
		this.lastName = newLastName;
	}

	static addNumbers(x, y) {
		return x + y;
	}
}

const mary = new Person('Mary', 'Smith', '7-22-1986');

mary.getsMarried('Jones');

console.log(mary);
console.log(Person.addNumbers(1, 2));
