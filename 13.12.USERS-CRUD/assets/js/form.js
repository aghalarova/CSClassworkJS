const BASE_URL = "http://localhost:8000";
let allInputs = document.querySelector("input");
let form = document.querySelector("form");

let allUsers = JSON.parse(localStorage.getItem("allUsers"));
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
if (id) {
  let userObject = {
    firstName: allInputs[0].value,
    lastName: allInputs[1].value,
    email: allInputs[2].value,
    photo: allInputs[3].value,
  };
  allUsers.push(userObject);
}
localStorage.setItem("allUsers", JSON.stringify(allUsers));