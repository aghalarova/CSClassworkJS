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

// async function deleteProduct(id, btn) {
//   // console.log(id);
//   try {
//     if (window.confirm("are u sure to delete product??")) {
//       await axios.delete(`${BASE_URL}/users/${id}`);
//       btn.closest(".card").remove();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// <div class="delete-icon">
//   <i
//     onclick="deleteProduct(${element.id},this)"
//     class="fa-solid fa-trash"
//   ></i>
// </div>;

// async function deleteUser(id) {
//   console.log(id);
//   await axios.delete(`${BASE_URL}/users/${id}`);
// }
{
  /* <button onClick="deleteUser(${element.id})">delete</button>; */
}
