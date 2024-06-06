
const verificationCode = [
   {
      code: 123456,
   },

   {
      code: 129456,
   },

   {
      code: 123356,
   },

   {
      code: 123756,
   },

   {
      code: 121456,
   },
]





// let verificationInput = document.querySelectorAll("#code");
//  let verificationInputValue = verificationInput.value;
// let check = false;

// function verifecationStep() {
//     for (let i = 0; i < verificationCode.length; i++) {
//         if (verificationInput == verificationCode[i].code) {
//             alert("Code valid");
//             check = true;
//             break;
//         }  
//     }
//     if (!check) {
//         alert("Code invalid");
//         console.log(verificationInputValue);

//     }
// }

// verifecationStep();


const verificationInput = document.getElementById("code");

const verificationInputvalue = verificationInput.value;
// console.log(verificationInput.attributes[1].nodeValue)
var check = false;
function verifecationStep() {
   console.log(verificationInput.value)
   console.log(verificationInputvalue,"wekkwejjwe")
// console.log(verificationInput.attributes[1].nodeValue)


   console.log(verificationInputvalue.length)
   for (let i = 0; i < verificationCode.length; i++) {
      if (verificationInput.value == verificationCode[i]?.code) {
         alert("code valid");
         check = true;
   window.location.href = '/home/index.html';

         break

      }
   }
   if (!check) {
      console.log(verificationInputvalue);
      alert("Code invalid");
   }
   


}



// verifecationStep();
