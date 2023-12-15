const BASE_URL = `https://restcountries.com/v2/`;
let button = document.querySelector(".button-dark");
let body = document.querySelector("body");
let countries = document.querySelector(".countries");
let input = document.querySelector(".search-region");
let select = document.querySelector("select");

async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawTable(response.data);
}
getData("all");

function drawTable(data) {
  data.forEach((element) => {
    countries.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3">
    <a href="./details.html"
      ><div class="card" style="width: 18rem">
        <img
          src="${element.flags.svg}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body region">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">Population : ${element.population}</p>
          <p class="card-text">Region : ${element.region}</p>
          <p class="card-text">Capital : ${element.capital}</p>
        </div>
      </div></a
    >
  </div>
        `;
  });
}

input.addEventListener("input", function (event) {
  fetch(`${BASE_URL}/all`)
    .then((response) => response.json())
    .then((data) => {
      let filtered = data.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase());
      });
      console.log(filtered);
      drawTable(filtered);
    });
});

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
}

button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? localStorage.setItem("darkMode", true)
    : localStorage.setItem("darkMode", false);
});

select.addEventListener("change", function (event) {
  let region = event.target.value;
  if (region !== "all") {
    fetch(`https://restcountries.com/v2/region/${region}`)
      .then((res) => res.json())
      .then((data) => drawTable(data));
  } else {
    getData("all");
  }
});
