const submitBtn = document.getElementById("submit")


function submitForm(){
    const uName = document.getElementById("uName")
    const userPassword = document.getElementById("password")
      let userName = [uName.value];
      let userPasswprd = [userPassword.value];
      console.log(userPasswprd[0])

    if(userName[0].length > 8)
    {
       alert("Use Name should be Upto 8 alphanumeric Characters")
    }else{
      var result = isAlphanumeric(userName)
      console.log("Working fine")
    }

    if(userPasswprd[0].length > 9)
    {
      alert("The Length Of password can be 9 only including one special character")
    }else if(!onlyOneSpecialCharacter(userPasswprd[0])){
      alert("Special character should be one ")
    }else{
      console.log("Working fine")
      alert("Form submitted successfully!");

    }


}

submitBtn.addEventListener("click",submitForm)

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }
  
  function onlyOneSpecialCharacter(str){
    return /^(?=[a-zA-Z0-9,]*['.-@#$%^&*()!][a-zA-Z0-9,]*$)[a-zA-Z,'.-@#$%^&*()!]+$/.test(str); 
  }