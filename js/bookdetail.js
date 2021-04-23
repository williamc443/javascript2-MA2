import { booksArrey } from "./script.js";

const bookDetails = document.querySelector(".book-detail");


console.log(bookDetails);

bookDetails.innerHTML = "";

for (let i = 0; i < booksArrey.length; i++) {

bookDetails.innerHTML += `<div class="book">
                                    <h4>Name: ${booksArrey[i].title}</h4>
                                    <p id="isbn">ISBN: ${booksArrey[i].isbn}</p>
                                    <button onclick="remove()">Remove</buttun>
                            </div>`;
                   }

onclick = remove();

document.getElementById("isbn").innerHTML = bookDetails;

             function remove() {
                bookDetails.splice(-1);
               document.getElementById("isbn").innerHTML = bookDetails;
             }

const removeBookButton = document.querySelectorAll("button");

removeBookButton.forEach(function (removeBookButton) {
    removeBookButton.addEventListener("click", handleClick);

    bookDetails.innerHTML = "";

});

    // function handleClick(event) {
    //     console.log(event);

    //     let booksArray;

    //     const removeItem = (arr, item) => {
    //         let newArray = [...arr]
    //         const index = newArray.findIndex((element) => element === item)
    //         if(index !== -1) {
    //             newArrry.spice(index, 1)
    //             return newArray

    //         }
    //     }



// function removeFromList(event) {
//     console.log(event);

//     let booksArray;

//     let remove = `${booksArray[i].isbn}`;

//     booksArrey.splice(booksArrey.indexOf(remove), 1);
//     console.log(`Array with "${remove}" removed:`, booksArrey);
// };

// removeFromList();