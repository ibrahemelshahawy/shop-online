const cart_products = JSON.parse(localStorage.getItem("CartProducts"))
console.log(cart_products);




// console.log(parent);

for(i=0 ; i < cart_products.length; i++){
    const product_data = cart_products.find(item => item.id === cart_products[i].id);
console.log(product_data);

    const parent = document.querySelector(".cart_products");

    const product = document.createElement("div");
    product.className= "cart_product";

    const removeProduct = document.createElement("button")
    removeProduct.className= "remove_product_Btn";

    removeProduct.addEventListener("click" , () =>{
        // console.log(product_data)
        cart_products.splice(product_data)
        
console.log(cart_products)
        
    })

    const removeProductImg = document.createElement("img");
    

    const productImg = document.createElement("img");
    productImg.className = "product_img";


    const name_discrebtion_continer = document.createElement("div")
    name_discrebtion_continer.className = "name_discrebtion_continer"


    const productName = document.createElement("h3");

    const productDiscrebtion = document.createElement("p");

    const productPrice = document.createElement("h3");



const counterContiner = document.createElement("div");
counterContiner.className = "counter_continer";


const counterPlusBtn = document.createElement("button");
const counterPlusBtnImg = document.createElement("img");



const counterQuantity = document.createElement("p");
counterQuantity.className = "counter_quantity"

const counterMinusBtn = document.createElement("button");
const counterMinusBtnImg = document.createElement("img");




const totalPrice = document.createElement("h3");
totalPrice.className ="total_price"


 const caunter_totalPrice_continer = document.createElement("div");
 caunter_totalPrice_continer.className = "caunter_totalPrice_continer"

    parent.append(product)
    product.append(removeProduct)
    removeProduct.append(removeProductImg);
    product.append(productImg)
    product.append(name_discrebtion_continer)
    name_discrebtion_continer.append(productName)
    name_discrebtion_continer.append(productDiscrebtion)
    name_discrebtion_continer.append(productPrice)
    product.append(caunter_totalPrice_continer)


    product.append(counterContiner)
    counterContiner.append(counterPlusBtn)
    counterPlusBtn.append(counterPlusBtnImg)
    counterContiner.append(counterQuantity)
    counterContiner.append(counterMinusBtn)
    counterMinusBtn.append(counterMinusBtnImg)
    product.append(totalPrice)

    counterQuantity.id = "counter_quantity"
    counterPlusBtnImg.className = "counterPlusBtn"


var sum = product_data.quantity;
var total = 0;

let plusBtns = document.querySelectorAll(".counterPlusBtn");
    // console.log(plusBtns)
   let newQuantity = JSON.parse(localStorage.getItem("CartProducts"))
counterPlusBtn.addEventListener("click" , () =>{
    console.log(product_data)

    const mapOnQuantity = newQuantity.map((it=>it.id == product_data.id?{...it,quantity:it.quantity+1}:{...it}))
console.log(mapOnQuantity)
        

            

    
   
      


})    

const receptTotalPrice= document.getElementById("recept_total_price");

for(x=0; x < cart_products.length; x++){
    total += +cart_products[x].total_price;
    
}

let sail = document.getElementById("total_price");
let taxes = document.getElementById("taxes_value");
let finalCoast = document.getElementById("final_coast");
let sailCodeInput = document.getElementById("sail");
let confirm_sail = document.getElementById("sail_Btn");


    




    counterPlusBtnImg.src = "../img/sign (1).png"
    counterMinusBtnImg.src = "../img/minus.png"
    counterQuantity.innerHTML = sum;
    removeProductImg.src = "../img/close.png"
    productImg.src = cart_products[i].image;
    productName.innerHTML = cart_products[i].name;
    productDiscrebtion.innerHTML = cart_products[i].discrebtion;
    productPrice.innerHTML = cart_products[i].price +"$";
    totalPrice.innerHTML = (cart_products[i].price * cart_products[i].quantity).toFixed(2) + "$";
    receptTotalPrice.innerHTML = (total).toFixed(2) + "$";
    sail.innerHTML= "10% >>>> " + (total * 10/100).toFixed(2);
    taxes.innerHTML = "14% >>>>>> " + (total * 14/100).toFixed(2);
    finalCoast.innerHTML = ((total * 14/100)+ (total) - (total * 10/100)).toFixed(2);

    function goToOrderConfirmation(){
        
        if(finalCoast !== 0){
            window.location.href = "../pay/index.html"
        } 
    }

}



ScrollReveal().reveal('.cart_product' , { delay: 600 , origin: "right" , distance : "50px"});
ScrollReveal().reveal('nav' , { delay: 600 , origin: "right" , distance : "50px"});
ScrollReveal().reveal('.cart_title' , { delay: 600 , origin: "right" , distance : "50px"});


ScrollReveal().reveal('.cart_products_recept' , { delay: 800 , origin: "top" , distance : "100px"});


ScrollReveal().reveal('.footer' , { delay: 400 , origin: "bottom" , distance : "50px"});


ScrollReveal().reveal('footer' , { delay: 300 , origin: "bottom" , distance : "50px"});





function logOut() {
    localStorage.removeItem("userData");
    window.location.href = "/sign in/index.html"
  }
  