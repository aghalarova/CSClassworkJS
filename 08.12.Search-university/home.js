const BASE_URL = `http://universities.hipolabs.com`;
const tBody = document.querySelector("tBody");
const input = document.querySelector("input");
const spinner = document.querySelector(".spinner-border");

async function getUniName(endpoint) {
  try {
    spinner.classList.add("show");
    let response = await axios(`${BASE_URL}/${endpoint}`);
    console.log(response.data);
    getData(response.data);
  } catch (error) {
  } finally {
    spinner.classList.remove("show");
  }
}
getUniName(`search?country=Azerbaijan`);

function getData(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
          <tr>
          <td>${element.name}</td>
          <td>${element.country}</td>
          <td>${element.domains[0]}</td>
          <td><a href="${element.web_pages[0]}">${element.web_pages[0]}</a></td>
          </tr>
    `;
  });
}
input.addEventListener("input", function (event) {
  spinner.classList.add("show");
  fetch(
    `${BASE_URL}/search?country=Azerbaijan&name=${event.target.value.toLocaleLowerCase()}`
  )
    .then((response) => response.json())
    .then((data) => {
      getData(data);
      spinner.classList.remove("show");
    });
});
