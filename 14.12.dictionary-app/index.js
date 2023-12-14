const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;
let form = document.querySelector("form");
let input = document.querySelector("input");
let meanings = document.querySelector(".meanings");

function dictApp(word) {
  fetch(`${BASE_URL}/${word}`)
    .then((response) => response.json())
    .then((data) => drawDict(data));
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  dictApp(input.value);
});

function drawDict(arr) {
  meanings.innerHTML = "";
  arr.forEach((element) => {
    console.log(element);
    meanings.innerHTML += `
    <div class="top">
      <p>${element.word}</p>
      <i class="fa-solid fa-volume-low"></i>
     </div>
    <div class="bottom">
      <p>${element.meanings[0].partOfSpeech}</p>
      <p>${element.meanings[0].definitions[0].definition}</p>
      <i onclick="playAudio(this)"><audio src="${element.phonetics[0].audio}"></audio></i>
    </div>`;
  });
}
function playAudio(icon) {
  icon.querySelector("audio").play();
}
