let id = localStorage.getItem("id");
const productPage = document.querySelector(".product-page")

const URL = "https://fakestoreapi.com/products"

fetch(URL)
.then(response => response.json() )
.then(function(data){
    console.log(data)
    const el = document.createElement("div");
    el.classList.add("product");
    el.innerHTML = ` <div class="product-info" id=${id}>
    <img src="${data[id].image}" alt="">
    <p class="title"> ${data[id].title}</p>
    <p class="price">price : ${ data[id].price}</p>
    <p class="product-description"></div>
    </div>`
    productPage.append(el);

})