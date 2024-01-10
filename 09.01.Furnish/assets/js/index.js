const BASE_URL = "http://localhost:8080";
const cards = document.querySelector(".cards-sect");
const searchInput = document.querySelector("input");
let arr;

async function getData() {
  const response = await axios(`${BASE_URL}/products`);
  console.log(response.data);
  arr = response.data;

  drawProducts(response.data);
}
getData();

function drawProducts(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="card">
        <i class="fa-regular fa-handshake"></i>
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <div class="icon">
          <button><i class="fa-regular fa-heart"></i></button>
          <button><i class="fa-regular fa-pen-to-square"></i></button>
          <button class="btn-card">
            <i class="fa-regular fa-trash-can"></i>
          </button>
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
  drawProducts(filtered);
});
