const BASE_URL = "http://localhost:8080";
const dataCards = document.querySelector(".data-cards");
const searchInput = document.querySelector("#search-input");
let arr;

async function getData() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
  drawCards(response.data);
  arr = response.data;
}
getData();

function drawCards(data) {
  dataCards.innerHTML = "";
  data.forEach((element) => {
    dataCards.innerHTML += `
     <div class="data-card">
        <img src="${element.img}" alt="" />
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <i class="fa-regular fa-trash-can" onclick=deleteCard("${element.id}",this)></i>
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

async function deleteCard(id, btn) {
  // console.log(id);
  if (confirm("?")) {
    await axios.delete(`${BASE_URL}/users/${id}`);
    btn.parentElement.remove();
  }
}
