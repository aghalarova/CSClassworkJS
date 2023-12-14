let users = JSON.parse(localStorage.getItem("users") ?? []);
let container = document.querySelector(".container");
async function addToFav(id) {
  let response = await axios(`${BASE_URL}/${id}`);
  let data = response.data;
  let selectUser = users.find((elem) => elem.id == id);
  if (!users.includes(selectUser)) {
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    alert("  ");
  }
}
