const BASE_URL = "http://localhost:8080";
const cardsData = document.querySelector(".cards-data");

async function getData() {
  const response = await axios(`${BASE_URL}/products`);
  console.log(response.data);
  drawCards(response.data);
}
getData();

function drawCards(data) {
  cardsData.innerHTML = "";
  data.forEach((element) => {
    cardsData.innerHTML += `
            <div class="text-card">
              <div class="text-card-left">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
              </div>
              <div class="text-card-right">
                <span>${element.price}</span>
              </div>
            </div>
     `;
  });
}
