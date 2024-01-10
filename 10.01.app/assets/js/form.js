const BASE_URL = "http://localhost:8080";
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (allInputs[0].value.trim() && allInputs[1].value.trim()) {
      let user = {
        title: allInputs[0].value,
        price: allInputs[1].value,
      };
      await axios.post(`${BASE_URL}/users`, user);
      window.history.back("../../home.html");
    } else {
      window.alert("aaaaa olur mu hiç öyle şey");
    }
  } catch (error) {
    console.log(error);
  }
});
