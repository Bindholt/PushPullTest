"use strict";

window.addEventListener("load", main);

function main() {
  console.log("JS virker");
  tfunction();
  nyPushTing();
  endnuMereLort();
}

function tfunction() {
  const html = /* html*/ `
  <div>viktor er mega sej</div>
  `;
  document.querySelector("#test").insertAdjacentHTML("beforeend", html);
}

function nyPushTing() {
  console.log("Fuck jeg elsker problemer");
}

function endnuMereLort() {
  console.log("Se funktionsnavn");
}

function nyfunktiontiltest() {
  console.log("Ny funktion fungerer");
}