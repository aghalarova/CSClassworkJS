let firstName = document.querySelector("#firstName");
let lastNAme = document.querySelector("#lastName");
let address = document.querySelector("#address");
let form = document.querySelector("#form");

let data = JSON.parse(localStorage.getItem("itemObject")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let info = {
    id: Date.now,
    firstName: firstName.value,
    lastName: lastNAme.value,
    address: address.value,
  };
  data.push(info);
  localStorage.setItem("itemObject", JSON.stringify(data));
  firstName.value = "";
  lastNAme.value = "";
  address.value = "";
});
