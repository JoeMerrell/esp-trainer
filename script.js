"use strict";

const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");

let selection;
let colorCompare;
let turnsRemaining;

const checkClick = function () {
  console.log(`${selection} clicked!`);
  if (colorCompare == color) {
    console.log("You guessed correctly!");
  } else {
    console.log("Try again!");
  }
};

// Generate random color

const color = Math.trunc(Math.random() * 4) + 1;
console.log(color);

green.addEventListener("click", function () {
  selection = "green";
  colorCompare = 1;
  checkClick();
});
yellow.addEventListener("click", function () {
  selection = "yellow";
  colorCompare = 2;
  checkClick();
});
red.addEventListener("click", function () {
  selection = "red";
  colorCompare = 3;
  checkClick();
});
blue.addEventListener("click", function () {
  selection = "blue";
  colorCompare = 4;
  checkClick();
});
