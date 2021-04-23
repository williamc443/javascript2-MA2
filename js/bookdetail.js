import { booksArrey } from "./script.js";

const bookDetails = document.querySelector(".book-detail");


console.log(bookDetails);

bookDetails.innerHTML = "";



for (let i = 0; i < booksArrey.length; i++) {

bookDetails.innerHTML += `<div class="book">
                                    <h4>Name: ${booksArrey[i].title}</h4>
                                    <p>ISBN: ${booksArrey[i].isbn}</p>
                                    <button id="${booksArrey[i].isbn}" onclick="removeBookButton()">Remove</buttun>
                            </div>`;

                            
}

             function removeBookButton() {

                document.getElementById(`${booksArrey[i].isbn}`);

    const removeBookButton = document.querySelectorAll("button");

removeBookButton.forEach(function (removeBookButton) {

    removeBookButton.addEventListener("onclick", removeBookButton);
    booksArrey.splice(`${booksArrey[i].isbn}`);
    bookDetails.innerHTML = "";


});
}
removeBookButton();
