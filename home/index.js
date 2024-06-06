
ScrollReveal().reveal('.categorise' , { delay: 300 , origin: "bottom" , distance : "50px"});

ScrollReveal().reveal('.mySwiper' , { delay: 300 , origin: "bottom" , distance : "50px"});


ScrollReveal().reveal('.products_continer' , { delay: 600 , origin: "bottom" , distance : "50px"});

ScrollReveal().reveal('.discount_continer' , { delay: 300 , origin: "bottom" , distance : "50px"});
ScrollReveal().reveal('.discount-shape1' , { delay: 300 , origin: "right" , distance : "50px"});
ScrollReveal().reveal('.discount-shape2' , { delay: 300 , origin: "left" , distance : "50px"});


ScrollReveal().reveal('.stiker_continer' , { delay: 300 , origin: "bottom" , distance : "50px"});


ScrollReveal().reveal('.product_card' , { delay: 400 , origin: "right" , distance : "50px"});

ScrollReveal().reveal('.gifts_panner' , { delay: 300 , origin: "bottom" , distance : "50px"});


ScrollReveal().reveal('.gift_panner1' , { delay: 600 , origin: "right" , distance : "50px"});


ScrollReveal().reveal('.footer' , { delay: 600 , origin: "bottom" , distance : "50px"});


ScrollReveal().reveal('footer' , { delay: 300 , origin: "bottom" , distance : "50px"});



const clothesArray = [
  {
    id: 1,
     name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    
  },
  {
    id: 2,
     name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    id: 3,
     name: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    id: 4,
     name: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    id: 5,
     name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    id: 6,
     name: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    id: 7,
     name: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    id: 8,
     name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    id: 9,
     name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    id: 10,
     name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    id: 11,
     name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    id: 12,
     name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    id: 13,
     name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    id: 14,
     name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    id: 15,
     name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    id: 16,
     name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    id: 17,
     name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    id: 18,
     name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
   
  },
  {
    id: 19,
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
    
  },
  {
    id: 20,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    quantity: 7,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  }
]


for (i = 0; i < clothesArray.length; i++) {

  


  let parent = document.querySelector(".products_continer");
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
     

// var storedObject = JSON.parse(localStorage.getItem('productInfo')) || {}; // Use {} if no object exists

console.log(productInfo);

// storedObject.newKey =sum;

// localStorage.setItem('productInfo', JSON.stringify(storedObject));


    })

    

    const popupQuantityBtnImg = document.createElement("img");
    popupQuantityBtnImg.classList.add("popup_quantityBtn_img")

    const popupQuantityNumber = document.createElement("h1");
    popupQuantityNumber.classList.add("popup_quantityNumber")
    popupQuantityNumber.id = "popup_quantityNumber";

    const popupQuantityBtn2 = document.createElement("button");
    popupQuantityBtn2.classList.add("popup_quantity_Btn");

    popupQuantityBtn2.addEventListener("click", () => {
      const cart_products = JSON.parse( localStorage.getItem("CartProducts"))

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



    popupButton.id = "send_product_to_cart";


let BtnsendProductToCart = document.getElementById("send_product_to_cart");

    // console.log(BtnsendProductToCart)
    BtnsendProductToCart.addEventListener("click" , () =>{
      console.log(productInfo);
    
          
if (sum <= 0){
  // alert("قم باضافة الكميه")
  
  const checkedTost =document.getElementById("tost_bar")
  checkedTost.style.right = "20px";

  let tostBarImg = document.getElementById("tost_bar_img");
  tostBarImg.src = "../img/wrong-decision.gif"
  let tostBarMessage = document.getElementById("tost_bar_messsge");
  tostBarMessage.innerHTML="قم باضافة الكميه"
  document.getElementById("loader9").style.display = "none"

 document.getElementById("loader8").style.display = "block"
  setTimeout(() => checkedTost.style.right="-100%", 3000)



  return
}
    
      if(localStorage.getItem("CartProducts")){
        
        const cart_products = JSON.parse( localStorage.getItem("CartProducts"))
        cart_products.push(
          {
            id : productInfo.id,
            name : productInfo.name,
            image : productInfo.image,
            discrebtion : productInfo.description,
            quantity : sum,
            total_quantity : productInfo.quantity - sum,
            price : productInfo.price,
            total_price : (+productInfo.price * +sum).toFixed(2),

          },
  
        )
  
        localStorage.setItem("CartProducts", JSON.stringify(cart_products))
  
  
      } else{
        localStorage.setItem("CartProducts" , JSON.stringify([
          {
            id : productInfo.id,
            name : productInfo.name,
            image : productInfo.image,
            discrebtion : productInfo.description,
            quantity : sum,
            total_quantity : productInfo.quantity - sum,
            price : productInfo.price,
            total_price : (+productInfo.price * +sum).toFixed(2),

          },

        ]))
      }
  
      const checkedTost =document.getElementById("tost_bar")
      checkedTost.style.right = "20px";

      let tostBarImg = document.getElementById("tost_bar_img");
      tostBarImg.src = "../img/double-check.gif"
      let tostBarMessage = document.getElementById("tost_bar_messsge");
      tostBarMessage.innerHTML="تمت اضافة المنتج الي سلة المشتريات"
 document.getElementById("loader8").style.display = "none"

      document.getElementById("loader9").style.display = "block"

      setTimeout(() => checkedTost.style.right="-100%", 3000)
      
    })





  })





  product_card.classList.add("product_card", clothesArray[i].id)
  // product_card_button.classList.add("open_popup")











}

let open_popup = document.querySelector(".open_popup")

// open_popup.addEventListener("click" ,()=>{
//   alert("hi body")
// console.log("jjjjjj")

// })



const stickers = [
  {
    id: 1,
     name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    
  },
  {
    id: 2,
     name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    id: 3,
     name: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    id: 4,
     name: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    id: 5,
     name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    id: 6,
     name: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    id: 7,
     name: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    id: 8,
     name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    id: 9,
     name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    id: 10,
     name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    id: 11,
     name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    id: 12,
     name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    id: 13,
     name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    id: 14,
     name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    id: 15,
     name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    id: 16,
     name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    id: 17,
     name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    id: 18,
     name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
   
  },
  {
    id: 19,
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
    
  },
  {
    id: 20,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    quantity: 7,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  }
]




for (i = 0; i <= stickers.length; i++) {


  let parent = document.querySelector(".stiker_continer");
  let product_card = document.createElement("div");
  let product_card_img = document.createElement("img");
  let product_card_h1 = document.createElement("h1");
  let product_card_discrebtion = document.createElement("p");
  let product_card_price = document.createElement("h2");
  let product_card_button = document.createElement("button");



  product_card_img.src = stickers[i].image;
  product_card_h1.innerHTML = stickers[i].name;
  product_card_discrebtion.innerHTML = stickers[i].description;
  product_card_price.innerHTML = stickers[i].price + "$";
  product_card_button.innerHTML = "عرض المنتج";
  const productInfo = stickers.find(item => item.id === stickers[i].id);

  




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
    // popupCounter.type = "number";
    // popupCounter.classList.add("popup_counter");
    // popupCounter.id = "popup_counter";

    const popupQuantity = document.createElement("div");
    popupQuantity.classList.add("popup_quantity");


    const popupQuantityBtn = document.createElement("button");
    popupQuantityBtn.classList.add("popup_quantity_Btn");
    let sum = 0;

    popupQuantityBtn.addEventListener("click", () => {
      if (sum == productInfo.quantity) {
        alert("انتهت الكميه")
        return

      }
      document.getElementById("popup_quantityNumber").innerHTML = ++sum;
      document.getElementById("popupPrice").innerHTML =( +productInfo.price * +sum).toFixed(2) + "$";

      // const cart_products_quantity = JSON.parse( localStorage.getItem("product"))

      // cart_products_quantity[i]["product_quantity"] = sum;
    })


    const popupQuantityBtnImg = document.createElement("img");
    popupQuantityBtnImg.classList.add("popup_quantityBtn_img")

    const popupQuantityBtnNumber = document.createElement("h1");
    popupQuantityBtnNumber.classList.add("popup_quantityBtn_number");
    popupQuantityBtnNumber.id = "popup_quantityNumber";


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
      document.getElementById("popupPrice").innerHTML = (+product.price * +sum).toFixed(2) + "$";

    })


    const popupQuantityBtnImg2 = document.createElement("img");
    popupQuantityBtnImg2.classList.add("popup_quantityBtn_img")

    popupImg.src = productInfo.image;
    popupName.innerHTML = productInfo.name;
    popupDiscrebtion.innerHTML = productInfo.description;
    popupName.innerHTML = productInfo.name;
    popupPrice.innerHTML = (productInfo.price).toFixed(2) + "$";
    popupQuantityBtnImg.src = "../img/sign (1).png";
    popupQuantityBtnImg2.src = "../img/minus.png";
    popupQuantityBtnNumber.innerHTML = "0";
    popupButton.innerHTML = "الي عربة التسوق";

    


    popupParent.append(popupTextDiv);
    popupTextDiv.append(popupName);
    popupParent.append(popupImg);
    popupTextDiv.append(popupDiscrebtion);
    popupTextDiv.append(popupPrice);
    popupTextDiv.append(popupQuantity);
    popupQuantity.append(popupQuantityBtn);
    popupQuantityBtn.append(popupQuantityBtnImg);
    popupQuantity.append(popupQuantityBtnNumber);
    popupQuantity.append(popupQuantityBtn2);
    popupQuantityBtn2.append(popupQuantityBtnImg2);


    popupTextDiv.append(popupButton);

    popupButton.id = "send_product_to_cart";




let BtnsendProductToCart = document.getElementById("send_product_to_cart");

    // console.log(BtnsendProductToCart)
    BtnsendProductToCart.addEventListener("click" , () =>{
      console.log(productInfo);
    
if (sum <= 0){
  // alert("قم باضافة الكميه")
  
  const checkedTost =document.getElementById("tost_bar")
  checkedTost.style.right = "20px";

  let tostBarImg = document.getElementById("tost_bar_img");
  tostBarImg.src = "../img/wrong-decision.gif"
  let tostBarMessage = document.getElementById("tost_bar_messsge");
  tostBarMessage.innerHTML="قم باضافة الكميه"
  document.getElementById("loader9").style.display = "none"

 document.getElementById("loader8").style.display = "block"
  setTimeout(() => checkedTost.style.right="-100%", 3000)



  return
}
    
      if(localStorage.getItem("CartProducts")){
        
        const cart_products = JSON.parse( localStorage.getItem("CartProducts"))
        cart_products.push(
          {
            id : productInfo.id,
            name : productInfo.name,
            image : productInfo.image,
            discrebtion : productInfo.description,
            quantity : sum,
            total_quantity : productInfo.quantity - sum,
            price : productInfo.price,
            total_price : (+productInfo.price * +sum).toFixed(2),
          },
  
        )
  
        localStorage.setItem("CartProducts", JSON.stringify(cart_products))
  
  
      } else{
        localStorage.setItem("CartProducts" , JSON.stringify([
          {
            id : productInfo.id,
            name : productInfo.name,
            image : productInfo.image,
            discrebtion : productInfo.description,
            quantity : sum,
            total_quantity : productInfo.quantity - sum,
            price : productInfo.price,
            total_price : (+productInfo.price * +sum).toFixed(2),
          },

        ]))
      }
  
      const checkedTost =document.getElementById("tost_bar")
      checkedTost.style.right = "20px";

      let tostBarImg = document.getElementById("tost_bar_img");
      tostBarImg.src = "../img/double-check.gif"
      let tostBarMessage = document.getElementById("tost_bar_messsge");
      tostBarMessage.innerHTML="تمت اضافة المنتج الي سلة المشتريات"
 document.getElementById("loader8").style.display = "none"

      document.getElementById("loader9").style.display = "block"

      setTimeout(() => checkedTost.style.right="-100%", 3000)

      
    })



        
    

  })







  product_card.classList.add("product_card", clothesArray[i].id)
  product_card_button.classList.add("open_stiker_popup");


  product_card_button.id = 'openPopup';







}








// function closePopup() {

//   document.getElementById('popup').style.display ='none';


//   document.getElementById("popuph1").remove();
//   document.getElementById("popupimg").remove();
//   document.getElementById("popupP").remove();
//   document.getElementById("popupPrice").remove();
//   document.getElementById("popup_text_div").remove();



// }


function closePopup1() {
  document.getElementById('popup').style.display = 'none';


  document.getElementById("popuph1").remove();
  document.getElementById("popupimg").remove();
  document.getElementById("popupP").remove();
  document.getElementById("popupPrice").remove();
  document.getElementById("popup_text_div").remove();












}



let users = [
  {
    id: 1,
    name: "ibrahem elshahawy",
    image: "../img/profileimg.png",
    email: "ibrahemelshahawy28@gmail.com",
  },
];

const profileImg = document.getElementById("profile_photo");
const profileName = document.getElementById("client_name");
const profileEmail = document.getElementById("client_email")



// for(i=0; i <users.length;i++){

  
//  }


 function closeSideMenu() {
  document.getElementById("side_menu_parent").style.left= "-100%";
  document.getElementById("side_menu_continer").style.left= "-100%";

}

function openSideList() {
  document.getElementById("side_menu_parent").style.left= "0%";
  document.getElementById("side_menu_continer").style.left= "0%";
}






// _______________+++++++++++++++++++++++++++++++ animation  ++===============================================//




// const swiper = document.getElementById("mySwiper");

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper.autoplay.start();

function logOut() {
  localStorage.removeItem("userData");
  window.location.href = "../sign in/index.html"
}

let loginUser = JSON.parse(localStorage.getItem("userData"));




console.log(JSON.parse(localStorage.getItem("userData")))
// let profile_img = document.getElementById("profile_photo");
  // profile_img.src = loginUser.profile_img


// for(i =0 ; i< loginUser.length; i++){
//   let profile_img = document.getElementById("profile_photo");
//   profile_img.src = loginUser.profile_img
// }



