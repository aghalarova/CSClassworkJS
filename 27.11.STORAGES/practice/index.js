let fullName = "Sabina Aghalarova";
let age = 21;
let skills = ["html", "css"];

localStorage.setItem("fullName", fullName);
localStorage.setItem("age", 21);
localStorage.setItem("skills", JSON.stringify(skills));

console.log(localStorage.getItem("fullName"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("skills"));
