// Array to store the books
const myLibrary = [];

// Buttons
const showDialog = document.querySelector('.black');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('.close');
const addBook = document.querySelector('.submit-btn');

// Inputs
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pages = document.querySelector('#pages');

// Parent container
const parentDiv = document.querySelector('.cards');

showDialog.addEventListener('click', () => {
    titleInput.value = "";
    authorInput.value = "";
    pages.value = "";
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

// Button to add book to the library
addBook.addEventListener('click', () => {
    addBookToLibrary();
});

// Book constructor
function Book(title, author, numberOfPages, state, index) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.state = state;
    this.index = index;
}

let bookIndex = 0;
function addBookToLibrary() {
    let checkedRadio = "";
    let readOption = document.querySelector('#read');
    let unreadOption = document.querySelector('#unread');

    if (readOption.checked) {
        checkedRadio = readOption.value;
    } else if (unreadOption.checked) {
        checkedRadio = unreadOption.value;
    }

    let newBook = new Book(titleInput.value, authorInput.value, pages.value, checkedRadio, bookIndex++);
    myLibrary.push(newBook);

    titles = ["Title", "Author", "Pages", "Status"];
    let div = document.createElement('div');
    div.classList.add('book-card');

    for (let i = 0; i < titles.length; i++) {
        const titleParagraph = document.createElement('p');
        titleParagraph.classList.add('title');
        titleParagraph.textContent = titles[i];
        div.appendChild(titleParagraph);

        const textParagraph = document.createElement('p');
        textParagraph.classList.add('text');
        textParagraph.textContent = Object.values(newBook)[i];
        div.appendChild(textParagraph);

        if(i == titles.length - 1){
            textParagraph.id = "status";
        }
    }

    const button = document.createElement('button');
    const editButton = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('black');
    button.style.marginRight = "10px";
    editButton.textContent = 'Change Status';
    editButton.classList.add('black');
    div.appendChild(button);
    div.appendChild(editButton);
    editButton.id = "edit";
    button.id = "delete";
    parentDiv.appendChild(div);

    let changeBookStatus = document.querySelector('#edit');
    let deleteBook = document.querySelector('#delete');
    let changeStatus = document.querySelector('#status');

    changeBookStatus.addEventListener('click' , () => {
        changeBookStatus.textContent === "Read" ? changeStatus.textContent = "Unread" : changeStatus.textContent = "Read";
    });

    const bookList = document.querySelectorAll('.book-card');

    deleteBook.addEventListener('click', () => {
        
    });
}
