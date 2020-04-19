const user = {
	email: 'jdoe@gmail.com',
};

try {
	// produce a reference error
	myFunction();

	if (!user.name) {
		throw 'User has no name';
	}
} catch (e) {
	console.log(e);
	console.log(e.message);
	console.log(e.name);
	console.log(e instanceof TypeError); // false because it is a reference error
} finally {
	console.log('fiunally runs regardless of results...');
}
console.log('program continues...');
