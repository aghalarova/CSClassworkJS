const BASE_URL = "http://localhost:8080";
let id = new URLSearchParams(window.location.search).get("id");
let dataCard = document.querySelector(".detail-page");

async function getDataDetail() {
  let response = await axios(`${BASE_URL}/users/${id}`);
  //   console.log(response.data);
  dataCard.innerHTML = `
      <div class="left-page">
            <img src="${response.data.image}" alt="" />
          </div>
          <div class="right-page">
            <h2>${response.data.title}</h2>
            <p>${response.data.description}</p>
            <p>${response.data.price}</p>
          </div>
`;
}
getDataDetail();
