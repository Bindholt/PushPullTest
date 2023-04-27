"use strict";

window.addEventListener("load", main);

function main() {
  console.log("JS virker");
  tfunction();
}

function tfunction() {
  const html = /* html*/ `
  <div>viktor er mega sej</div>
  `;
  document.querySelector("#test").insertAdjacentHTML("beforeend", html);
}
