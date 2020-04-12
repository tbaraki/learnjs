// Book constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI constructor
function UI() {}

// add boook to list
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById('book-list');
	// create tr element
	const row = document.createElement('tr');
	// insert cols to tr
	row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

	list.appendChild(row);
};

// Show alert method
UI.prototype.showAlert = function (message, className) {
	// create a div
	const div = document.createElement('div');
	// add class nam,e
	div.className = `alert ${className}`;
	// add text
	div.appendChild(document.createTextNode(message));
	// get parent element
	const container = document.querySelector('.container');
	// get form
	const form = document.querySelector('#book-form');
	// inset alert element dev before form
	container.insertBefore(div, form);
	// disppear after timeout
	setTimeout(function () {
		document.querySelector('.alert').remove();
	}, 3000);
};

// delete book
UI.prototype.deleteBook = function (target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

// clear fields
UI.prototype.clearFields = function () {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

// event listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
	// get form values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// instantiate book object
	const book = new Book(title, author, isbn);

	// instantiate UI object
	const ui = new UI();

	// validate inputs
	if (title === '' || author === '' || isbn === '') {
		// error alert
		ui.showAlert('Please fill in all fields', 'error');
	} else {
		// Add book to list
		ui.addBookToList(book);
		// show sucess alert
		ui.showAlert('Book added', 'success');
		// clear fields on submit
		ui.clearFields();
	}

	e.preventDefault();
});

// event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
	const ui = new UI();
	ui.deleteBook(e.target);
	ui.showAlert('Book removed', 'success');

	e.preventDefault();
});
