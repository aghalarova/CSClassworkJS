const BASE_URL = "http://localhost:8080";
const dataCards = document.querySelector(".cards-data");

async function getData() {
  const response = await axios(`${BASE_URL}/products`);
  console.log(response.data);
  arr = response.data;

  drawCards(arr);
}
getData();

function drawCards(data) {
  dataCards.innerHTML = "";
  data.forEach((element) => {
    dataCards.innerHTML += `
       <div class="card-data">
              <div class="img">
                <img src="${element.image}" alt="" />
              </div>
              <div class="text">
                <h2>${element.title}</h2>
                <p>${element.description}</p>
              </div>
              <div>
                <p>${element.price}</p>
              </div>
            </div>
    `;
  });
}
