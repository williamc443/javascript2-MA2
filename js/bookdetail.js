import { book } from "./script.js";

const bookDetails = document.querySelector(".book-detail");



console.log(bookDetails);

bookDetails.innerHTML = "";

for (let i = 0; i < book.length; i++) {

bookDetails.innerHTML += `<div class="book">
                                    <h4>Name: ${book[i].title}</h4>
                                    <p>ISBN: ${book[i].isbn}</p>
                                    <button data-book="${book[i]}">Remove</buttun>
                                </div>`;

}

const books = document.querySelectorAll(".book button");

    books.forEach(function (book) {
        book.addEventListener("click", handleClick);
    });



function handleClick(event) {
    event.target.classList.toggle("complete");

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


