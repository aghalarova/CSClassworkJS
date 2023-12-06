let product = document.querySelector(".products");
let elec = document.querySelector(".elec");
let jewelery = document.querySelector(".jewelery");
let menClothing = document.querySelector(".men-clothing");
let womenClothing = document.querySelector(".women-clothing");

const BASE_URL = `https://fakestoreapi.com/products`;
async function getData(endpoint = "") {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  //   console.log(response.data);
  drawProducts(response.data);
}
getData();

function drawProducts(data) {
  product.innerHTML = "";
  data.forEach((item) => {
    product.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem">
         <img src="${item.image}" class="card-img-top" alt="">
         <div class="card-body">
         <p class="card-text">
          ${item.description}
        </p>
       <strong>${item.price}</strong>
      
      </div>
    </div>
  </div>`;
  });
}

elec.addEventListener("click", function () {
  getData("category/electronics");
});
jewelery.addEventListener("click", function () {
  getData("category/jewelery");
});
menClothing.addEventListener("click", function () {
  getData("category/men's clothing");
});
womenClothing.addEventListener("click", function () {
  getData("category/women's clothing");
});
