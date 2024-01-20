const BASE_URL = "http://localhost:8080";
const tBody = document.querySelector("tbody");
const searchInput = document.querySelector(".table-input");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");

async function getData() {
  const response = await axios(`${BASE_URL}/products`);
  console.log(response.data);
  arr = response.data;
  drawProducts(arr);
}
getData();

function drawProducts(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
                        <tr>
                            <td><img src="${element.image}" alt=""></td>
                            <td>${element.title}</td>
                            <td>${element.description}</td>
                            <td>${element.price}</td>
                            <td><button onclick=deleteCard("${element.id}",this)>DELETE</button></td>
                        </tr>
            `;
  });
}

async function deleteCard(id, btn) {
  if (confirm("?s")) {
    await axios.delete(`${BASE_URL}/products/${id}`);
    btn.parentElement.remove();
  }
}

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawProducts(filtered);
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  try {
    if (
      allInputs[0].value.trim() &&
      allInputs[1].value.trim() &&
      allInputs[2].value.trim() &&
      allInputs[3].value.trim()
    ) {
      let user = {
        image: allInputs[0].value,
        title: allInputs[1].value,
        description: allInputs[2].value,
        price: allInputs[3].value,
      };
      await axios.post(`${BASE_URL}/products`, user);
    } else {
      window.alert("!!!!!");
    }
  } catch (error) {
    console.log(error);
  }
});
