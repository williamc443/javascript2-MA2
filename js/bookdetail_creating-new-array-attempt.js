import { booksArrey } from "./script.js";

let listBooks = [];


function createNewList() {


const listContainer= document.querySelectorAll(".container");

listContainer.innerHTML = "";

listBooks.forEach(function () {
    bookButtonSelector.innerHTML += `<div class="book">
    <h4>Name: ${booksArrey[i].title}</h4>
    <p>ISBN: ${booksArrey[i].isbn}</p>
    <button data-book="${booksArrey[i]}">Remove</buttun>
</div>`;
});

const books = document.querySelectorAll("book-detail");


books.forEach(function (book) {
        book.addEventListener("click", handleClick);

    });

const BookRemoveButtons = document.querySelectorAll (".book");

BookRemoveButtons.forEach(function(trash) {
    trash.addEventListener("click", removeFromList);

});
}

function handleClick(event) {
    event.target.classList.toggle("clickevent");
    console.log(event);
}

function removeFromList() {
    console.log(event);

    const deleteThisBook = event.target.dataset.booksArrey[i];

    const removeBooks = listBooks.filter (function (book) {
        if (deleteThisBook !== book) {
            return true;
    }
    listBooks = removeBooks;

    createNewList();
    });

}

    

    // function removeButton() {

    //     const removeButton = document.querySelectorAll("button")
    
    //     removeButton.forEach(function(trash) {
    //         trash.addEventListener("click", removeFromList);
    //     });
    // }


// function removeFromList(event) {
//     console.log(event);

//     const deleteThisBook = event.target.dataset.book;

//     const newList = listBook.filter(function (book) {
//         if (deleteThisBook !== book) {
//             return true;
//         }
//     });

//     listBooks = newList;

// }


