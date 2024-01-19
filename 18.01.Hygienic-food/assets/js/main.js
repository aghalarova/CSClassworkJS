const BASE_URL = "http://localhost:8080";
const cardsData = document.querySelector(".cards-data");
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const btnThird = document.querySelector(".btn-3");
const btnFour = document.querySelector(".btn-4");
const searchInput = document.querySelector("#search-input");

async function getData() {
  const response = await axios(`${BASE_URL}/products`);
  arr = response.data;
  let filtered = arr.filter(
    (item) => item.catagory.toLocaleLowerCase() === "breakfast"
  );
  drawCards(filtered);
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
                <a href="../../details.html?id=${element.id}">View details</a>
              </div>
            </div>
     `;
  });
}

btnOne.addEventListener("click", function () {
  let filtered = arr.filter(
    (item) => item.catagory.toLocaleLowerCase() === "breakfast"
  );
  drawCards(filtered);
});

btnTwo.addEventListener("click", function () {
  let filtered = arr.filter(
    (item) => item.catagory.toLocaleLowerCase() === "brunch"
  );
  drawCards(filtered);
});

btnThird.addEventListener("click", function () {
  let filtered = arr.filter(
    (item) => item.catagory.toLocaleLowerCase() === "lunch"
  );
  drawCards(filtered);
});

btnFour.addEventListener("click", function () {
  let filtered = arr.filter(
    (item) => item.catagory.toLocaleLowerCase() === "dinner"
  );
  drawCards(filtered);
});

// async function deleteCard(id, btn) {
//   if (confirm("?")) {
//     await axios.delete(`${BASE_URL}/products/${id}`);
//     btn.parentElement.remove();
//   }
// }

// searchInput.addEventListener("input", function (e) {
//   e.preventDefault();
//   let searchFiltered = arr.filter((item) =>
//     item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
//   );
//   drawCards(searchFiltered);
// });
