const BASE_URL = "http://localhost:9000";
const dataCards = document.querySelector(".div-cards");
const searchInput = document.querySelector(".search-input");
let arr;

async function getData() {
  const response = await axios(`${BASE_URL}/brands`);
  console.log(response.data);
  drawCards(response.data);
  arr = response.data;
}
getData();

function drawCards(data) {
  dataCards.innerHTML = "";
  data.forEach((element) => {
    dataCards.innerHTML += `
        <div class="div-card">
            <div class="img">
                <img src="${element.imgURL}" alt="" />
            </div>
            <div class="text">
                <h2>${element.title}</h2>
                <p>${element.description}</p>
            </div>
        </div>
    `;
  });
}

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawCards(filtered);
});
