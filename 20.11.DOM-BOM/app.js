// TASK-1
// let count = 1;
// let interval = setInterval(() => {
//   console.log(count++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);

// TASK-2
// let textChange = document.querySelector(".text");
// let buttonChange = document.querySelector(".btn");
// buttonChange.addEventListener("click", function () {
//   textChange.innerText = "I am hacker";
// });

// TASK-3
// let parag = document.querySelectorAll(".test");
// console.log(parag);
// parag.forEach((item) => {
//   console.log(item.innerHTML);
// });

// TASK-4
// let str = "developer";
// let index = 1;
// let int = setInterval(() => {
//   if (index <= str.length) {
//     str = str.slice(0, index).toLocaleUpperCase() + str.slice(index);
//     index++;
//     console.log(str);
//   } else {
//     setTimeout(() => {
//       clearInterval(int);
//     });
//   }
// }, 1000);

// TASK-5
let colors = ["blue", "black", "pink", "cyan"];
let buttonChange = document.querySelector(".bcg-color-btn");
let body = document.getElementById("body");

buttonChange.addEventListener("click", function () {
//   console.log(Math.floor(Math.random() * colors.length));
  body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
