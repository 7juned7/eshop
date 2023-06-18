let id = localStorage.getItem("id");

const productPage = document.querySelector(".product-page");
const cartValue = document.querySelector(".cart-badge");
cartValue.innerHTML = localStorage.getItem("cartItemNo");

const URL = "https://fakestoreapi.com/products";
console.log(localStorage)

fetch(URL)
.then(response => response.json() )
.then(function(data){
   
    const el = document.createElement("div");
    el.classList.add("product");
    el.innerHTML = `
    <div class="product-image">
                    <img src="${data[id].image}" alt="">
                </div>
                <div class="product-description">
                    <p class="title">${data[id].title}</p>
                    <p class="description">${data[id].description}</p>
                    <p class="price">price :$${data[id].price}</p>
                    <div class="rating"> rating:${data[id].rating.rate}</div>
                    <div class=buy-product>
                    <button class="add-to-cart">Add To Cart</button>
                    <button class="proceed-to-payment">procced to payment</div>
                    </div>
                </div>`
    productPage.append(el);
    const cartNo = el.querySelector(".add-to-cart");
    cartNo.addEventListener("click",addToCart);

})

function addToCart(e){

    if(e.srcElement.innerHTML === "Add To Cart" ){
        
        e.srcElement.innerHTML = " Remove From Cart";
        cartValue.innerHTML++;
    }
else  {
    e.srcElement.innerHTML = "Add To Cart"
    cartValue.innerHTML--;
}   
const cartItemNo = cartValue.innerHTML;

localStorage.setItem("cartItemNo",cartItemNo);

}

localStorage.removeItem("id");
