let button = document.querySelector(".button");
let body = document.querySelector("body");
let darkMode = localStorage.getItem("darkMode") === true;
if (darkMode) {
  document.body.classList.add("dark-mode");
}
button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? localStorage.setItem("darkMode", true)
    : localStorage.setItem("darkMode", false);
});
