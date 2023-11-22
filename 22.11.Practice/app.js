let buttonStart = document.querySelector(".start-btn");
let buttonStop = document.querySelector(".stop-btn");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset-btn");
let increment = document.querySelector(".increment-btn");
let decrement = document.querySelector(".decrement-btn");
let count = 0;
let interval;
buttonStart.addEventListener("click", function () {
  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 800);
  this.setAttribute("disabled", null);
  buttonStop.removeAttribute("disabled");
});
buttonStart.style.backgroundColor = "green";
buttonStart.style.color = "white";
buttonStop.addEventListener("click", function () {
  clearInterval(interval);
  this.setAttribute("disabled", null);
  buttonStart.removeAttribute("disabled");
});

buttonStop.style.backgroundColor = "red";
buttonStop.style.color = "white";
reset.addEventListener("click", function () {
  count = 0;
  result.innerText = count;
  clearInterval(interval);
  buttonStart.removeAttribute("disabled");
  buttonStop.removeAttribute("disabled");
});

increment.addEventListener("click", function () {
  count++;
  result.innerText = count;
});
decrement.addEventListener("click", function () {
  count--;
  result.innerText = count;
});

let incrementInp = document.querySelector("#increment");
let decrementInp = document.querySelector("#decrement");
let incrementBtn = document.querySelector(".inc-btn");
let decrementBtn = document.querySelector(".dec-btn");

incrementBtn.addEventListener("click", function () {
  count += +incrementInp.value;
  result.innerText = count;
});

decrementBtn.addEventListener("click", function () {
  count -= +decrementInp.value;
  result.innerText = count;
});
