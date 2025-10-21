"use strict";

window.addEventListener("DOMContentLoaded", main);

// tilfældigt tal fra 1 til 99
const number = Math.floor(Math.random()*99)+1;

function main() {
    console.log("JavaScript kører!");

    document.querySelector("#btn_guess").addEventListener("click", buttonClicked);
}

function buttonClicked() {
    console.log("Der blev klikket på knappen");

    // modtag gæt
    // NOTE: bruger https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/valueAsNumber
    const guess = document.querySelector("#guess").valueAsNumber;
    console.log(guess);

    // sammenlign gæt med tal
    // hvis det er for højt - skriv "Du gættede for højt"
    if (guess > number) {
        console.log("Du gættede for højt");
        document.querySelector("#guesses").insertAdjacentHTML("beforeend",
            `<li>Du gættede på ${guess} - det var for højt</li>`
        ); 
    } 
    // hvis det var for lavt - skriv "Du gættede for lavt"
    if (guess < number) {
        console.log("Du gættede for lavt");
        document.querySelector("#guesses").insertAdjacentHTML("beforeend",
            `<li>Du gættede på ${guess} - det var for lavt</li>`
        ); 
    }
    // hvis det var korrekt - skriv "Det var korrekt" - og stop
    if (guess == number) {
        console.log("Du gættede korrekt");
        document.querySelector("#guesses").insertAdjacentHTML("beforeend",
            `<li>Du gættede på ${guess} - det er korrekt!</li>`
        ); 
        // stop guessing - remove eventlistener
        document.querySelector("#btn_guess").removeEventListener("click", buttonClicked);
    }

}