"use strict";

window.addEventListener("load", main);

async function main() {
  const tests = await getTests();
  console.log(tests);

  console.log("JS virker");
  nyPushTing();
  endnuMereLort();
}

async function getTests() {
  const response = await fetch("test.json");
  const data = await response.json();
  return data;
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
