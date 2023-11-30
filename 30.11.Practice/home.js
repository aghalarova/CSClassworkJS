let form = document.querySelector("form");
let h2Element = document.createElement("h2");
let user = JSON.parse(localStorage.getItem("username"));
h2Element.innerText = `Wellcome ${user.value}`;
form.append(h2Element);
