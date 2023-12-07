const BASE_URL = `http://localhost:8080`;
let input = document.querySelector(".input");
let boxes = document.querySelector(".boxes");

async function getBlog(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  //   console.log(response.data);
  drawBlog(response.data);
}
getBlog("blogs");

function drawBlog(data) {
  boxes.innerHTML = "";
  data.forEach((element) => {
    boxes.innerHTML += `
    <div class="box">    
        <h2>${element.title}</h2>
        <p>${element.body}</p>
        <p>${element.author}</p>
        <button class="button" onclick="deleteCard(${element.id},this)">Delete</button>
        <button class="button">Edit</button>
    </div>
    `;
  });
}

async function deleteCard(id, btn) {
  console.log(id);
  if (confirm("ok?")) {
    btn.closest("div").remove();
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
}
