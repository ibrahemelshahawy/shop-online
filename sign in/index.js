const loginEmail = document.querySelector("#users_email");
const loginpassword = document.getElementById("users_password");


console.log(loginEmail)
const signInData = JSON.parse(localStorage.getItem("signInData"));

function signIn() {
    var loginEmailValue = loginEmail.value;
    var loginpasswordValue = loginpassword.value;

                const clientData = signInData.find(item => item.email === loginEmailValue && item.password == loginpasswordValue);

                if(clientData){
                    alert("success")
                    localStorage.setItem("userData" , JSON.stringify(clientData));
                    window.location.href = "../home/index.html"
                }else{
                    alert("not found")
                }




   
}


