"use strict";

window.addEventListener("DOMContentLoaded", main);

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
}