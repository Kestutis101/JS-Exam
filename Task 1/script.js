/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const userInput = document.querySelector("#search");

document.querySelector("#submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const user = userInput.value;
  const parLb = document.createElement("p");
  const parG = document.createElement("p");
  const parOz = document.createElement("p");
  const output = document.querySelector("#output");

  parLb.textContent = `Svoris svarais (lb) : ${user * 2.2046}`;

  parG.textContent = `Svoris gramais (g) : ${user / 0.001}`;

  parOz.textContent = `Svoris uncijomis (oz) : ${user * 35.274}`;

  output.append(parLb, parG, parOz);
});
