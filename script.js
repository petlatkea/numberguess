"use strict";

window.addEventListener("DOMContentLoaded", main);

// tilfældigt tal fra 1 til 99
const number = Math.floor(Math.random()*99)+1;

function main() {
    console.log("JavaScript kører!");

    document.querySelector("#input_form").addEventListener("submit", buttonClicked);
}

function buttonClicked(event) {
    // prevent form-submit from loading another page
    event.preventDefault();

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
        document.querySelector("#input_form").removeEventListener("submit", buttonClicked);

        // and disable input-field and button
        document.querySelector("#input_form input").disabled = true;
        document.querySelector("#input_form button").disabled = true;
    }

    // marker det gættede tal, så det er klar til at blive erstattet af næste indtastning
    document.querySelector("#guess").select();
}