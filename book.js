const myLibrary = [];

const addBook = document.querySelector('.black');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('.close');

addBook.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

function Book(title, author, numberOfPages, state){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.state = state;
}

function addBookToLibrary(){
}


