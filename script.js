"use strict";

window.addEventListener("DOMContentLoaded", main);

const number = 42;

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
    } 
    // hvis det var for lavt - skriv "Du gættede for lavt"
    if (guess < number) {
        console.log("Du gættede for lavt");
    }
    // hvis det var korrekt - skriv "Det var korrekt" - og stop
    if (guess == number) {
        console.log("Du gættede korrekt");
    }

}