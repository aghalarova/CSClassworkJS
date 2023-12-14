const BASE_URL = "http://localhost:8000";
let tBody = document.querySelector("tbody");

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawTable(response.data);
}
getData("users");

function drawTable(data) {
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td><img src="${element.userphoto}" alt=""></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td> 
        <td>
        <a href="./form.html" class="button btn-color-green">Edit</a>
        <button class="button btn-color-red" onclick="deleteUsers(${element.id},this)">Delete</button>
        <button class="button btn-color-blue">Add Fav</button>
        </td>
  </tr>
      `;
  });
}
async function deleteUsers(id, btn) {
  if (confirm("deqiiq?")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
}
