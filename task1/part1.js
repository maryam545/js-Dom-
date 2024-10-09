"use strict";
const firstParagraph = (document.querySelector("p").textContent =
  "First paragraph has been update");
const allParagraph = document.querySelectorAll("p");
for (let i = 1; i < allParagraph.length; i++) {
  allParagraph[i].textContent = `allParagraph ${i + 1}`;
  allParagraph[i].style.backgroundColor = "lightblue";
}
console.log(firstParagraph);
console.log(allParagraph);
