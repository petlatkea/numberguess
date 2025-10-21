"use strict";

window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("JavaScript kører!");

    document.querySelector("#btn_guess").addEventListener("click", buttonClicked);
}

function buttonClicked() {
    console.log("Der blev klikket på knappen");
}