let h2Element = document.createElement("h2");
let body = document.querySelector("body");
let form = document.querySelector("form");
let userNameInput = document.createElement("input");
let emailInput = document.createElement("input");
let passwordInput = document.createElement("input");
let submit = document.createElement("button");
let text = document.createElement("p");

userNameInput.placeholder = "Enter Your Username";
emailInput.placeholder = "Email";
passwordInput.placeholder = "Confirm Password";
form.append(h2Element, userNameInput, emailInput, passwordInput, submit, text);
body.append(form);

h2Element.innerText = "Sign Up";
text.innerHTML = "Already have an account?  <a href=./login.html>Login</a>";
submit.innerText = "Sign Up";
submit.type = "submit";
passwordInput.type = "password";
emailInput.type = "email";
userNameInput.style.padding = "10px";
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
  if (
    userNameInput.value != "" &&
    emailInput != "" &&
    passwordInput.value != ""
  ) {
    let signUpObject = {
      userName: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    users.push(signUpObject);
    localStorage.setItem("users", JSON.stringify(users));
    window.location = "login.html";
  } else {
    window.alert("Empty input");
  }
});
