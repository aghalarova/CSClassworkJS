const BASE_URL = "http://localhost:8080";

const cards = document.querySelector(".cards");

async function getUsers() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
  getData(response.data);
}
getUsers();

function getData(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
            <h1>${element.title}</h1>
            <p>${element.price}</p>
            <div class="delete-icon">
                <i onclick="deleteProduct(${element.id},this)" class="fa-solid fa-trash"></i>
            </div>
        </div>
    `;
  });
}

async function deleteProduct(id, btn) {
  // console.log(id);
  try {
    if (window.confirm("are u sure to delete product??")) {
      await axios.delete(`${BASE_URL}/users/${id}`);
      btn.closest(".card").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

//  <a href="details.html?id=${element.id}" class="details">
//    View Details
//  </a>;
