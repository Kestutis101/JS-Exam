/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const output = document.querySelector("#output");

async function loadCars() {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    data.forEach((car) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const h2Brand = document.createElement("div");
      h2Brand.classList.add("brand");
      h2Brand.textContent = car.brand;

      const ulModels = document.createElement("div");
      car.models.forEach((model) => {
        const liModelItem = document.createElement("p");
        liModelItem.textContent = model;
        ulModels.append(liModelItem);
      });

      card.append(h2Brand, ulModels);
      output.append(card);
    });
  } catch (err) {
    console.log(err);
  }
}

loadCars();
