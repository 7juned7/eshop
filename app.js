
const productSection = document.querySelector(".product-section")

const mainContainer = document.querySelector(".main-container")
const URL = "https://fakestoreapi.com/products";

fetch(URL)
.then(function(response){
    return response.json();
})
.then(function (data){
   console.log(data);

 
  for(var x in data){
    console.log(data[x].image);
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




