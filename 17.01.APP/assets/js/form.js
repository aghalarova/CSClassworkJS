const BASE_URL = "http://localhost:8080";
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (
      allInputs[0].value.trim() &&
      allInputs[1].value.trim() &&
      allInputs[2].value.trim()
    ) {
      let user = {
        title: allInputs[0].value,
        description: allInputs[1].value,
        image: allInputs[2].value,
      };
      await axios.post(`${BASE_URL}/users`, user);
      window.history.back("../../home.html");
    } else {
      window.alert("??????");
    }
  } catch (error) {
    console.log(error);
  }
});
