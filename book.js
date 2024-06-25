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

// Nodelist of the cards
const bookCards = document.querySelectorAll('.book-card');

// Parent container
const parentDiv = document.querySelector('.cards');


showDialog.addEventListener('click', () => {
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
function Book(title, author, numberOfPages, state){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.state = state;
}

function addBookToLibrary(){
    let checkedRadio = "";
    let readOption = document.querySelector('#read');
    let unreadOption = document.querySelector('#unread');

    if(readOption.checked){
        checkedRadio = readOption.value;
    }
    else if(unreadOption.checked){
        checkedRadio = unreadOption.value;
    }


    let newBook = new Book(titleInput.value, authorInput.value, pages.value, checkedRadio);
    myLibrary.push(newBook);
    titles = ["Title", "Author", "Pages", "State"]
    let div = document.createElement('div');
    let button = document.createElement('button');
    div.classList.add('book-card');
    button.classList.add('black');
    button.textContent = "Remove";
    let pointer = 0;
    for(let i = 0; i <= 7; i++){
        const paragraph = document.createElement('p');
        if(i % 2 === 0){
            paragraph.classList.add('title');
            paragraph.textContent = titles[pointer];
            pointer++;
        }
        else{
            paragraph.classList.add('text');
        }
        div.appendChild(paragraph);
        div.appendChild(button);
    }
    parentDiv.appendChild(div);

    const nodeList = document.querySelectorAll('.book-card .text');
    for(let i = 0; i <= nodeList.length - 1; i++){
        let values = Object.values(myLibrary[i]);
        for(let j = 0; j <= values.length - 1; j++){
            nodeList[j].textContent = values[j];
        }
    }
}


