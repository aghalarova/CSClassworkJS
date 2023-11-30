let body = document.querySelector("body");
let form = document.querySelector("form");

let h2Element = document.createElement("h2");
let emailInput = document.createElement("input");
let passwordInput = document.createElement("input");
let pElement = document.createElement("p");
let submit = document.createElement("button");
let text = document.createElement("p");

emailInput.placeholder = "Email";
passwordInput.placeholder = "Password";
form.append(h2Element, emailInput, passwordInput, pElement, submit, text);
body.append(form);

h2Element.innerText = "Login";
pElement.innerHTML = `<a href="">Forgot password</a>`;
text.innerHTML = `Don't have an account? <a href=./signup.html>Signup</a>`;
submit.innerText = "Login";
submit.type = "submit";
passwordInput.type = "password";
emailInput.style.padding = "10px";
emailInput.style.padding = "10px";
passwordInput.style.padding = "10px";
submit.style.padding = "10px 70px";
submit.style.backgroundColor = "blue";
submit.style.color = "white";
submit.style.borderRadius = "10px";
form.style.margin = "40px";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap = "20px";

let users = JSON.parse(localStorage.getItem("users")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
