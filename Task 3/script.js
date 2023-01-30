/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUserOutput = document.querySelector("#output");
const messagePar = document.querySelector("#message");

document.querySelector("#btn").addEventListener("click", async (e) => {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    data.forEach((data) => {
      const parLogin = document.createElement("p");
      parLogin.textContent = data.login;
      parLogin.classList = "par-login";

      const parAvatar = document.createElement("p");
      parAvatar.textContent = data.avatar_url;
      parAvatar.classList = "par-url";
      showUserOutput.append(parLogin, parAvatar);

      if (messagePar !== "") {
        messagePar.textContent = "";
      }
    });
  } catch (err) {
    showUserOutput.textContent = err;
  }
});
