let weather = document.querySelector(".weather");
let body = document.querySelector("body");
let input = document.querySelector("input");
let button = document.querySelector(".button");
let bottom = document.querySelector(".bottom");
body.style.backgroundColor = "pink";
weather.style.display = "flex";
weather.style.justifyContent = "center";
weather.style.alignItems = "center";
weather.style.flexDirection = "column";
weather.style.backgroundColor = "violet";
weather.style.width = "500px";
input.style.padding = "10px 30px";
button.style.padding = "10px 30px";
button.style.margin = "10px";
input.style.margin = "10px";

const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=`;
function getWeather(curCity) {
  fetch(`${BASE_URL}${curCity}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      bottom.innerHTML = `
       <div>
             <p>${data.location.name},${data.location.country}</p>
            <img src="${data.current.condition.icon}" alt="" />
             <p>${data.current.condition.text}</p>
             <p>Selsie ${data.current.temp_c}</p>
             <p>Farangeith ${data.current.temp_fw}</p>
      </div>
      `;
    });
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  getWeather(input.value);
});
getWeather("London");
