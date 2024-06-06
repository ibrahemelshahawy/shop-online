
  
  // const profileImg = document.getElementById("profile_photo");
  const profileName = document.querySelector("#client_name2");
  const profileEmail = document.getElementById("client_email2");
  const profileSideMenuName = document.querySelector("#client_name");
  const profileSideMenuEmail = document.getElementById("client_email");
  const profileAge = document.getElementById("client_age");
  const profilePhone = document.getElementById("client_phone");


  
console.log("ERerjkejkjker")
  console.log(JSON.parse(localStorage.getItem("userData")))
  

  let userData =JSON.parse(localStorage.getItem("userData"));



    // profileImg.src = "../img/profileimg.png";

    const keyToFind = [userData.name,userData.email,userData.phone,userData.age];


    let found = false;

    function findKey(userData, keyToFind){
      for (let key in userData){
        if (key === keyToFind) {
          found = true;
   

          return;
        }
      }
    }       
    console.log(keyToFind);
    // console.log(keyToFind[1]);

    profileName.innerHTML = keyToFind[0];
    console.log(profileName)
    console.log(keyToFind[0]);

    // profileSideMenuName.innerHTML = keyToFind[0];

  profileEmail.innerHTML = keyToFind[1];
  console.log(keyToFind[1]);

  // profileSideMenuEmail.innerHTML = keyToFind[1];

 

  profilePhone.innerHTML = keyToFind[2];
  console.log(keyToFind[2]);

  profileAge.innerHTML = keyToFind[3];
  console.log(keyToFind[3]);


 
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''




for (i = 0; i < clothesArray.length; i++) {


  let parent = document.querySelector(".client_history_ofbuying");
  let product_card = document.createElement("div");
  let product_card_img = document.createElement("img");
  let product_card_h1 = document.createElement("h1");
  let product_card_discrebtion = document.createElement("p");
  let product_card_price = document.createElement("h2");
  let product_card_button = document.createElement("button");



  product_card_img.src = clothesArray[i].image;
  product_card_h1.innerHTML = clothesArray[i].name;
  product_card_discrebtion.innerHTML = clothesArray[i].description;
  product_card_price.innerHTML = clothesArray[i].price + "$";
  product_card_button.innerHTML = "عرض المنتج";
  const productInfo = clothesArray.find(item => item.id === clothesArray[i].id);


  product_card_button.id = 'openPopup';
  product_card.classList.add("product_card")




  parent.append(product_card);
  product_card.append(product_card_img);
  product_card.append(product_card_h1);
  product_card.append(product_card_discrebtion);
  product_card.append(product_card_price);
  product_card.append(product_card_button);



  product_card_button.addEventListener("click", function () {
    console.log(productInfo)
    document.getElementById('popup').style.display = 'flex';

    const popupParent = document.getElementById("popup_content");


    let popupTextDiv = document.createElement("div");
    popupTextDiv.classList.add("popup_text_div")
    popupTextDiv.id = 'popup_text_div';

    let popupImg = document.createElement("img");
    popupImg.classList.add('popupimg');
    popupImg.id = 'popupimg';

    let popupName = document.createElement("h1");
    popupName.classList.add('popuph1');
    popupName.id = 'popuph1';

    let popupDiscrebtion = document.createElement("p");
    popupDiscrebtion.classList.add('popupP');
    popupDiscrebtion.id = 'popupP';

    let popupPrice = document.createElement("h1");
    popupPrice.classList.add('popupPrice');
    popupPrice.id = 'popupPrice';


    const popupButton = document.createElement("button");
    popupButton.classList.add("popup_button");
    popupButton.id = 'popup_button';



    // const popupCounter = document.createElement("input");
    //   popupCounter.type = "number";
    //   popupCounter.classList.add("popup_counter");
    //   popupCounter.id = "popup_counter";

    const popupQuantity = document.createElement("div");
    popupQuantity.classList.add("popup_quantity");


    const popupQuantityBtn = document.createElement("button");
    popupQuantityBtn.classList.add("popup_quantity_Btn");
    let sum = 0;
    popupQuantityBtn.addEventListener("click", () => {
      if (sum == productInfo.quantity) {
        alert("لقد نفذت الكميه");
        return
      }
      document.getElementById("popup_quantityNumber").innerHTML = ++sum;
      document.getElementById("popupPrice").innerHTML = (+productInfo.price * +sum).toFixed(2);
    })

    const popupQuantityBtnImg = document.createElement("img");
    popupQuantityBtnImg.classList.add("popup_quantityBtn_img")

    const popupQuantityNumber = document.createElement("h1");
    popupQuantityNumber.classList.add("popup_quantityNumber")
    popupQuantityNumber.id = "popup_quantityNumber";

    const popupQuantityBtn2 = document.createElement("button");
    popupQuantityBtn2.classList.add("popup_quantity_Btn");

    popupQuantityBtn2.addEventListener("click", () => {
      if (sum <= 0) {
        return
      }
      document.getElementById("popup_quantityNumber").innerHTML = --sum;
      if (sum <= 0) {
        return
      }

      document.getElementById("popupPrice").innerHTML = (+productInfo.price * +sum).toFixed(2);


    })

    const popupQuantityBtnImg2 = document.createElement("img");
    popupQuantityBtnImg2.classList.add("popup_quantityBtn_img")



    popupImg.src = productInfo.image;
    popupName.innerHTML = productInfo.name;
    popupDiscrebtion.innerHTML = productInfo.description;
    popupName.innerHTML = productInfo.name;
    popupPrice.innerHTML = productInfo.price + "$";
    popupButton.innerHTML = "الي عربة التسوق";
    popupQuantityBtnImg.src = "../img/sign (1).png"
    popupQuantityBtnImg2.src = "../img/minus.png"
    popupQuantityNumber.innerHTML = sum;


    popupParent.append(popupTextDiv);
    popupTextDiv.append(popupName);
    popupParent.append(popupImg);
    popupTextDiv.append(popupDiscrebtion);
    popupTextDiv.append(popupPrice);
    // popupTextDiv.append(popupCounter);
    popupTextDiv.append(popupQuantity);
    popupQuantity.append(popupQuantityBtn);
    popupQuantityBtn.append(popupQuantityBtnImg);

    popupQuantity.append(popupQuantityNumber);
    popupQuantity.append(popupQuantityBtn2);
    popupQuantityBtn2.append(popupQuantityBtnImg2);



    popupTextDiv.append(popupButton);










  })
}

function closePopup1() {
  document.getElementById('popup').style.display = 'none';


  document.getElementById("popuph1").remove();
  document.getElementById("popupimg").remove();
  document.getElementById("popupP").remove();
  document.getElementById("popupPrice").remove();
  document.getElementById("popup_text_div").remove();

}



function closeSideMenu() {
  document.getElementById("side_menu_parent").style.left= "-100%";
  document.getElementById("side_menu_continer").style.left= "-100%";

}

function openSideList() {
  document.getElementById("side_menu_parent").style.left= "0%";
  document.getElementById("side_menu_continer").style.left= "0%";
}

function logOut() {
  localStorage.removeItem("userData");
  window.location.href = "../sign in/index.html"
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// break;

