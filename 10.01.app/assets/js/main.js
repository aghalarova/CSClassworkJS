const BASE_URL = "http://localhost:8080";
const searchInput = document.querySelector("input");
const cards = document.querySelector(".cards");
let arr;
async function getUsers() {
  const response = await axios(`${BASE_URL}/users`);
  arr = response.data;
  getData(response.data);
  // console.log(response.data);
}
getUsers();

function getData(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
            <h1>${element.title}</h1>
            <p>${element.price}</p>
             <i onclick="deleteUser(${element.id},this)" class="fa-solid fa-trash" ></i>         
        </div>
    `;
  });
}

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  getData(filtered);
});

async function deleteUser(id) {
  try {
    if (window.confirm("r u sure to delete product??")) {
      await axios.delete(`${BASE_URL}/users/${id}`);
      btn.closest(".product-card").remove();
    }
  } catch (error) {
    console.log(error);
  }
}
