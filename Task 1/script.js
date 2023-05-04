/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

document.querySelector("#submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.querySelector("#search").value;
  const output = document.querySelector("#output");

  if (output.children.length === 0) {
    const parLb = document.createElement("p");
    const parG = document.createElement("p");
    const parOz = document.createElement("p");

    parLb.textContent = `Svoris svarais (lb) : ${(user * 2.2046).toFixed(2)}`;
    parG.textContent = `Svoris gramais (g) : ${user / 0.001}`;
    parOz.textContent = `Svoris uncijomis (oz): ${(user * 35.274).toFixed(2)}`;

    output.append(parLb, parG, parOz);
  } else {
    output.children[0].textContent = `Svoris svarais (lb) : ${(
      user * 2.2046
    ).toFixed(2)}`;
    output.children[1].textContent = `Svoris gramais (g) : ${user / 0.001}`;
    output.children[2].textContent = `Svoris uncijomis (oz): ${(
      user * 35.274
    ).toFixed(2)}`;
  }
});
