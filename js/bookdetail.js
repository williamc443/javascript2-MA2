import { books } from "./script.js";

const bookDetails = document.querySelector(".book-detail");



console.log(bookDetails);

bookDetails.innerHTML = "";

for (let i = 0; i < books.length; i++) {

bookDetails.innerHTML += `<div class="book">
                                    <h4>Name: ${books[i].title}</h4>
                                    <p>ISBN: ${books[i].isbn}</p>
                                    <button data-book="${books[i]}">Remove</buttun>
                            </div>`;

}

const removeBookButton = document.querySelectorAll("button");

removeBookButton.forEach(function (books) {
        books.addEventListener("click", handleClick);
    });



function handleClick(event) {
    event.target.classList.toggle("clickevent");
console.log(event);
}

    // function removeFromList() {

    //     const removeButton = document.querySelectorAll("button")
    
    //     removeButton.forEach(function(trash) {
    //         trash.addEventListener("click", removeFromList);
    //     });
    // }


function removeFromList(event) {
    console.log(event);

    const deleteThisBook = event.target.dataset.book;

    const newList = listBook.filter(function (book) {
        if (deleteThisBook !== book) {
            return true;
        }
    });

    listBooks = newList;

}


