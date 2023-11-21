// TASK-1
// const button = document.querySelector(".btn");
// const prDiv = button.parentElement;
// button.addEventListener("click", function () {
//   prDiv.style.backgroundColor = "red";
//   prDiv.style.width = "300px";
//   prDiv.style.height = "300px";
//   prDiv.style.position = "relative";

//   button.style.position = "absolute";
//   button.style.right = "15px";
//   button.style.bottom = "15px";
// });

// TASK-2
// const buttonBcg = document.querySelector(".button");
// buttonBcg.addEventListener("click",function(){
//     document.body.classList.toggle("bg-teal")
// })

// TASK-4
// const cities = ["Ganja", "Baku", "Yevlakh", "Barda"];
// const ulElement = document.querySelector("ul");

// cities.forEach((item, i) => {
//   const liElement = document.createElement("li");
//   liElement.innerText = item;
//   ulElement.append(liElement);
//   liElement.style.listStyle = "none";
//   liElement.addEventListener("click", function () {
//     this.remove();
//   });
// });

const addImage = document.querySelector(".image");
const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://cdn4.vectorstock.com/i/1000x1000/84/78/boring-vector-4258478.jpg"
);
addImage.append(img);
