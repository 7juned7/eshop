
const productSection = document.querySelector(".product-section")
const cartValue = document.querySelector(".cart-badge");
const mainContainer = document.querySelector(".main-container")
const URL = "https://fakestoreapi.com/products";
cartValue.innerHTML = localStorage.getItem("cartItemNo");
console.log(localStorage)


fetch(URL)
.then(function(response){
    return response.json();
})
.then(function (data){
  

 
  for(var x in data){
   
     const el = document.createElement("div");
     el.classList.add("product");
     
    el.innerHTML = ` <div class="product-info" id=${x}>
    <img src="${data[x].image}" alt="">
    <p class="title"> ${data[x].title}</p>
    <p class="price">price : ${ data[x].price}</p>
   
   
    
</div>`
productSection.append(el);
  }
   
  const products = productSection.querySelectorAll(".product-info");
  
  products.forEach(element => {
    element.addEventListener("click",()=>{
      let id = element.id;
      localStorage.setItem("id",id);
      location.href = "./product-info.html";
     
    })
 });
})




