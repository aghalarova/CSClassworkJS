let body = document.querySelector("body");
let h1Elem = document.createElement("h1");
let imageElem = document.createElement("img");
let container = document.querySelector(".container");
container.append(h1Elem, imageElem);

body.style.backgroundColor = "teal";
h1Elem.innerText = "Random image";
h1Elem.style.color = "white";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";
imageElem.style.width = "30%";
imageElem.style.borderRadius = "20%";

const BASE_URL = `https://dog.ceo/api/breeds/image`;
imageElem.src =
  "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_1803.jpg";
setInterval(() => {
  fetch(`${BASE_URL}/random`)
    .then((response) => response.json())
    .then((data) => {
      imageElem.src = data.message;
    });
}, 2000);
