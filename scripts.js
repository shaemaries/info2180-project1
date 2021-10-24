/* Add your JavaScript to this file */
"use strict"

window.onload = function(){
    var form = document.getElementsByTagName('form')[0]
	document.getElementsByTagName('button')[0].addEventListener("click", validForm)
}

function validForm(){
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var inputEmail = document.getElementById("email").value.trim()

    event.preventDefault();
    event.stopPropagation();
   

    if(validEmail.test(inputEmail) && inputEmail !=""){
         setMessage('Thank you! Your email adress '+ inputEmail +' has been added to our mailing list!', "valid")
         document.getElementById("email").value = ""
         return
    }


   setMessage('Please enter a valid email address',"invalid")   


}

function setMessage(message, status){
    var messageContainer = document.getElementsByClassName("message")[0]
   
    messageContainer.innerHTML=message
    messageContainer.style.backgroundColor="white"
    messageContainer.style.marginTop ="10px"
    messageContainer.style.padding="5px"

    if (status == "invalid"){
        messageContainer.style.color="red"
    }
    else{
        messageContainer.style.color="green"
    }

  
    messageContainer.style.display='';
    setTimeout(function(){
        messageContainer.style.display='none';
    },3000)

}