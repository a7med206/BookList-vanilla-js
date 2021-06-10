// Book Class: represents a book
import Book from './book.js';
// UI Class: Handle UI Tasks
import UI from './dom-manipulation.js';
// Store Class: Handle Storage
import Store from './store.js';

// Event: Displat Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e)=> {
    // Prevent actual submit 
    e.preventDefault();
    // Get Form Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // validation
    if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please Fill In All Fields','danger' )
    } else {
        // instantiate book 
        const book = new Book(title, author, isbn);
        // Add book to UI
        UI.addBookToList(book);
        // Add book to Store
        Store.addBook(book)
        // show success message 
        UI.showAlert('Book Added Successfully','success');
        // clear form
        UI.clearForm();
    }
});

//Event: Remove a Book
document.getElementById('book-list').addEventListener('click', (e) => {
    //remove from UI
    UI.deleteBook(e.target);
    //remove from store
    let isbn = e.target.parentElement.parentElement.children[2].textContent;
    Store.removeBook(isbn);
    // show delete message 
    UI.showAlert('Book Deleted Successfully','success');
})