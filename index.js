let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let dateInput = document.getElementById("client_age");
let profileImg = document.getElementById("client_photo");



var transformImg ="";


profileImg.addEventListener("change", (e) =>{
   const transformedImg =  e.target.files[0];
   // transformImg= URL.createObjectURL(transformedImg)

   const reader = new FileReader();
   reader.readAsDataURL(transformedImg);
   reader.onload = function(e) {
     const transformImg = e.target.result;

   console.log(transformImg);
}})


function goToStep2(){

const nameInputvalue =nameInput.value ;
const phoneInputvalue =phoneInput.value ;
const emailInputvalue =emailInput.value ;
const passwordInputvalue =passwordInput.value ;
const dateInputValue = dateInput.value;
// const profileImgValue = profileImg.value;



    

// console.log(nameInputvalue?.split(" ")?.length >= 3 )

if ( nameInputvalue?.split(" ")?.length >= 3 ) {
   //  alert( "you have entered valid data" );
// console.log("11111")


 if( phoneInputvalue?.length== 11){
   //  alert( "you have entered valid number" );


   if(localStorage.getItem("signInData")){
      
      const users = JSON.parse( localStorage.getItem("signInData"))
      users.push(
         {
            id: users.length+1,
            name : nameInputvalue ,
            email : emailInputvalue,
            phone : phoneInputvalue,
            password : passwordInputvalue,
            profile_img : transformImg,
            age :new Date().getFullYear() - new Date(dateInputValue).getFullYear(),
          }
      )

      localStorage.setItem("signInData", JSON.stringify(users))
   } else {
      localStorage.setItem("signInData", JSON.stringify([{
         id:1,
         name : nameInputvalue ,
         email : emailInputvalue,
         phone : phoneInputvalue,
         profile_img : transformImg,
         password : passwordInputvalue,
         age :new Date().getFullYear() - new Date(dateInputValue).getFullYear(),
       }]
      ));
   }
   

   if(!emailInputvalue){
    
      alert("email is not valid"); 

   } else{
      alert("email valid");
     window.location.href = "./sign in/index.html"
 console.log(JSON.parse(localStorage.getItem("signInData")));



   }


 } else{
    alert( "you have entered invalid number" );

 }

 } else{
    alert( "you have entered invalid data" );

 }

 



    } 




   