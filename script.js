const myLibrary = [];

function Book(title, author, pages, haveYouRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.haveYouRead = haveYouRead;
   this.info = function() {
       return { title, author, pages, haveYouRead };
   }
}


const theHobbit = new Book('The Hobbit', "J.R.R Tolkien", "295 pages", true);
const lotr = new Book('The Lord of the Rings', "Tolkien", "400 pages", false);
console.log(theHobbit);

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);

myLibrary.push(theHobbit);
myLibrary.push(lotr)

console.log(myLibrary);

function createDefaultCard() {
    console.log('length of array', myLibrary.length)
    for (let i = 0; i < myLibrary.length; i++) {
        console.log('counter', i)
        let lib = myLibrary[i].info()
        createCard(lib.title, lib.author, lib.pages, lib.haveYouRead)
    }
}

// create div for card here
function createCard(bookTitle, bookAuthor, bookPages, hasReadBook) {
    const card = document.createElement('div')
    const title = document.createElement('h4')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const hasRead = document.createElement('p')
    const removeBtn = document.createElement('button')
    const icon = document.createElement('i')

    card.classList.add('card')
    removeBtn.classList.add('removeBtn')
    icon.classList.add('fa', 'fa-trash-o')

    removeBtn.textContent = 'Remove'
    const isRead = hasReadBook 
    ? 'yes' 
    : 'no'
    hasRead.textContent = 'Have you read? ' + isRead
    title.textContent = 'Title: ' + bookTitle
    author.textContent = 'Author: ' + bookAuthor
    pages.textContent = 'Pages: ' + bookPages

    card.setAttribute('id', bookTitle)
    removeBtn.setAttribute('id', bookTitle + 'removeBtn')

    removeBtn.appendChild(icon)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(hasRead)
    card.appendChild(removeBtn)

    const main = document.getElementById('main');
    main.appendChild(card)

    removeBtn.addEventListener('click', removeCard)
}

function addForm() {
    document.getElementById('form1').style.display = 'block';
 }

function removeCard(e) {
     e.target.parentElement.remove();
    //   const card = document.getElementById('card');
    //   card.remove();
}







function addUserInput() {
    const form = document.getElementById('form1');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const num = document.getElementById('num').value;
    const read = document.getElementById('read').checked;

    createCard(title, author, num, read)

    form.addEventListener('submit', (e) => {
         e.preventDefault();
        //   display.innerHTML = {Title};
        //   display.innerHTML = 'button';    
});
};
    
createDefaultCard()
