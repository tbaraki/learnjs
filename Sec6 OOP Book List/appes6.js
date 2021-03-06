class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBookToList(book) {
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
	}

	showAlert(message, className) {
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
	}

	deleteBook(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}

	clearFields() {
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
}

// persist to local storage class
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static displayBooks() {
		const books = Store.getBooks();

		books.forEach(function (book) {
			const ui = new UI();
			ui.addBookToList(book);
		});
	}

	static addBook(book) {
		const books = Store.getBooks();

		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn) {
		const books = Store.getBooks();
		books.forEach(function (book, index) {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
		// add book to local storage
		Store.addBook(book);
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
	// remove from local storage
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
	ui.showAlert('Book removed', 'success');

	e.preventDefault();
});
