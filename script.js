const myLibrary = [];

function Book(title, author, pages, haveYouRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.haveYouRead = haveYouRead;
   this.info = function() {
       return this.title + this.author + this.pages + this.haveYouRead;
   }
}


const theHobbit = new Book('The Hobbit, ', "J.R.R Tolkien, ", "295 pages, ", "not read yet");
console.log(theHobbit.info());

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);

myLibrary.push(theHobbit.info());
console.log(myLibrary);



function addForm() {
    document.getElementById('form1').style.display = 'block';
 }

function removeCard() {
    const card = document.getElementById('card');
    card.remove();
 }

function removeDisplay() {
      const display = document.getElementById('display');
      display.addEventListener('click', (e) => {
           display.remove();

    
    })
};
removeDisplay();



function addBookToLibrary() {
    // const mySubmit = document.querySelector('#mySubmit');
    // mySubmit.addEventListener('click', () => {

    // })

    // for(let i=0; i < size; i++) {
    // const title = document.getElementById('title').value;

    const form = document.getElementById('form1');
    // const display = document.createElement('div');
    const display = document.getElementById('display');
    myDiv = document.getElementById('display');
    const button = document.createElement('BUTTON');
    const text = document.createTextNode('Remove');
    button.appendChild(text);
    myDiv.appendChild(button);
    button.style.backgroundColor = 'goldenrod';
    button.style.padding = '20px';
    button.style.borderRadius ='20px';
    button.style.marginTop = '150px';
    button.classList.add = 'btn1';
    display.style.border = 'solid black';
    display.style.padding = '40px';
    display.style.margin = '10px';
    display.style.borderRadius = '8px';
    display.style.height ='320px';
    display.style.marginTop= '-300px';
    display.style.marginLeft = '-120px';
    display.style.marginRight = '500px';
    display.style.backgroundColor = 'grey';
    
    

    


     form.addEventListener('submit', (e) => {
         e.preventDefault();
          display.innerHTML = {Title};
          display.innerHTML = 'button';
        
        
});
};
    // document.querySelector('#num').innerHTML = document.querySelector('#a').value
    
//      for(i = 0; i < size; i++) {
//         const container = document.querySelector(".container");
//         const column = document.createElement("div");
//         column.classList.add('column');
//         //  Card content will go here 

//          for(let j = 0; j < size; j++) {
//             const row = document.createElement('div');
//             row.classList.add('row');
//             row.style.border ='2px solid black';
//         }

//     //     <button id="btn" onclick="removeCard()" style="border-radius: 20px; width: 100px; padding: 20px; background-color: goldenrod;">Remove</button>
        


    
//  addBookToLibrary(1);
// document.getElementById("mySubmit").addEventListener("click", function(event){
//     event.preventDefault();

//  })
// }
// };
// };


