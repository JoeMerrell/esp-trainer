"use strict";

const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");

let selection;

const checkClick = function () {
  console.log(`${selection} clicked!`);
};

// Generate random color

const color = Math.trunc(Math.random() * 4) + 1;
console.log(color);

green.addEventListener("click", function () {
  selection = "green";
  checkClick();
});
yellow.addEventListener("click", function () {
  selection = "yellow";
  checkClick();
});
red.addEventListener("click", function () {
  selection = "red";
  checkClick();
});
blue.addEventListener("click", function () {
  selection = "blue";
  checkClick();
});
