const http = new EasyHTTP();

// // Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// User Data
const data = {
	name: 'John Doe',
	username: 'jdoe',
	email: 'jdoe@gmail.com',
};

// create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// update user
http.put('https://jsonplaceholder.typicode.com/users/2', data)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// // delete user
// http.delete('https://jsonplaceholder.typicode.com/users/3')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));
