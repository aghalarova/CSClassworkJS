const BASE_URL = "http://localhost:8080";
const cards = document.querySelector(".banner-cards");
async function getData() {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
        drawProducts(data);
    });
}
getData();
function drawProducts(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="banner-card">
        <img src="${element.image}" alt="">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
    </div>
      `;
  });
}
