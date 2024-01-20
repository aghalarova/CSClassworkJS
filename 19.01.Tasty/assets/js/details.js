const BASE_URL = "http://localhost:8000";
let id = new URLSearchParams(window.location.search).get("id");
const detailPage = document.querySelector(".detail-page");

async function getData() {
  const response = await axios(`${BASE_URL}/products/${id}`);
  console.log(response.data);
  detailPage.innerHTML = `
        <div class="detail">
            <p>${response.data.title}</p>
          </div>
  `;
}
getData();
