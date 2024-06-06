const cart_products = JSON.parse(localStorage.getItem("CartProducts"))
console.log(cart_products)


const handPay = document.getElementById("pay_by_hand");
const VisaPay = document.getElementById("pay_by_visa");
const payByHandBtn = document.getElementById("payByHand")
const payByVisaBtn = document.getElementById("payByVisa")

function payByHand(){
    handPay.style.display = "flex"
    VisaPay.style.display = "none"
    payByHandBtn.style.backgroundColor = "brown"
    payByVisaBtn.style.backgroundColor = "#f0f0f0"
    payByHandBtn.style.color = "white"
    payByVisaBtn.style.color = "black"
}

function payByVisa(){
    VisaPay.style.display = "block"
    handPay.style.display = "none"
    payByVisaBtn.style.backgroundColor = "brown"
    payByHandBtn.style.backgroundColor = "#f0f0f0"
    payByVisaBtn.style.color = "white"
    payByHandBtn.style.color = "black"
}

let sail = document.getElementById("total_price");
let taxes = document.getElementById("taxes_value");
let finalCoast = document.getElementById("final_coast");
const receptTotalPrice= document.getElementById("recept_total_price");

let total = 0;
for(x=0; x < cart_products.length; x++){
    total += +cart_products[x].total_price;
    
}

receptTotalPrice.innerHTML = (total).toFixed(2) + "$";

sail.innerHTML= "10% >>>> " + (total * 10/100).toFixed(2);
    taxes.innerHTML = "14% >>>>>> " + (total * 14/100).toFixed(2);
    finalCoast.innerText = ((total * 14/100)+ (total) - (total * 10/100)).toFixed(2);
    // finalCoast.value= 0;


    const userData = JSON.parse(localStorage.getItem("userData"))
    console.log(userData)

    let emailInput = document.getElementById("email");
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let ageInput = document.getElementById("age");


    emailInput.value = userData.email;
    nameInput.value = userData.name;
    phoneInput.value = userData.phone;
    ageInput.value = userData.age;

    const findLocation = document.getElementById("location_btn");
    console.log(findLocation)

    findLocation.addEventListener("click" , () => {
     const locationInput = document.getElementById("map-link");
     const x = document.getElementById("testLocation")
     let map_link = locationInput.value;

     console.log(map_link);

     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }

      function showPosition(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        var latlng = { lat: lat, lng: long };

        console.log(lat ,long ,latlng);

        let src = "https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=egypt+(My%20Business%20Name)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    //   document.getElementById("mapp").src = src;
      document.getElementById("map-link").value = lat;
    }      

      


    })


    let emailInput1 = document.getElementById("email1");
    let nameInput1 = document.getElementById("name1");
    let phoneInput1 = document.getElementById("phone1");
    let ageInput1 = document.getElementById("age1");


    emailInput1.value = userData.email;
    nameInput1.value = userData.name;
    phoneInput1.value = userData.phone;
    ageInput1.value = userData.age;


  


    function pay(){
let finalCoast = document.getElementById("final_coast");
const payBtn = document.getElementById("pay")
const pay_toast = document.getElementById("pay_confirmation");

pay_toast.addEventListener("click" , () =>{
  pay_toast.style.display = "none"
})
        
  if(finalCoast !== 0){
    // payBtn.style.backgroundColor = "blue"
    pay_toast.style.display= "flex"
   
  setTimeout(() => {
    pay_toast.style.display="none";
    window.location.href = "../home/index.html"
  },3000 
)

  }

  localStorage.removeItem("CartProducts");

  }
 






  


  function logOut() {
    localStorage.removeItem("userData");
    window.location.href = "../sign in/index.html"
  }
  
    