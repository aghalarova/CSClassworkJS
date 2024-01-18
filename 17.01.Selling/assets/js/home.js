const BASE_URL = "http://localhost:8080";
const dataCards = document.querySelector(".data-cards");
const searchInput = document.querySelector("input");
let arr;
// const id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const response = await axios(`${BASE_URL}/users`);
  // console.log(response.data);
  drawCards(response.data);
  arr = response.data;
}
getData();

function drawCards(data) {
  dataCards.innerHTML = "";
  data.forEach((element) => {
    dataCards.innerHTML += `
          <div class="data-card">
              <div class="img">
                <img src="${element.image}" alt="" />
              </div>
              <p>${element.title}</p>
              <div class="icon-text">
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <span>4.9</span>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-heart"></i>
                  <span>29</span>
                </div>
              </div>
              <p>${element.description.slice(
                0,
                38
              )} <a href="./details.html?id=${element.id}">..see more</a></p>
              <p>${element.price}</p>
             <i class="fa-regular fa-trash-can" onclick=deleteCard("${
               element.id
             }",this)></i>
            </div>
    `;
  });
}

async function deleteCard(id, btn) {
  if (confirm("?")) {
    await axios.delete(`${BASE_URL}/users/${id}`);
    btn.parentElement.remove();
  }
}

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawCards(filtered);
});
