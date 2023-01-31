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

document.querySelector("#btn").addEventListener("click", async () => {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    data.forEach((data) => {
      const divLogin = document.createElement("div");
      divLogin.textContent =
        data.login.charAt(0).toUpperCase() + data.login.slice(1);
      divLogin.classList = "login-div";

      const imgAvatar = document.createElement("img");
      imgAvatar.setAttribute("src", data.avatar_url);
      imgAvatar.textContent = data.avatar_url;
      imgAvatar.classList = "img";

      showUserOutput.append(divLogin, imgAvatar);
    });
    if (messagePar !== "") {
      messagePar.style.display = "none";
    }
  } catch (err) {
    alert(err);
  }
});
