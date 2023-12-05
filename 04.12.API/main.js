let productsDiv = document.querySelector(".products-div");
const BASE_URL = `https://api.escuelajs.co/api/v1`;
fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {
    productsDiv.innerHTML = "";
    data.forEach((element) => {
      productsDiv.innerHTML += `
          <div class="product">
          <div class="product-image">
              <img src="${element.image[0]}" alt="">
          </div>
          <div class="product-heading">
              <p class="title">${element.title}</p>
              <p class="description">${element.description}</p>
              <span>${element.price}:</span>
              <div><button class="deleteBtn" >Delete</button></div>
          </div>
      </div>
              `;
    });
  })

  .catch((err) => console.log(err));

// let newProductObj = {
//   title: inputs[0].value,
//   price: inputs[1].value,
//   description: inputs[2].value,
//   categoryId: 1,
//   images: [inputs[3].value],
// };
