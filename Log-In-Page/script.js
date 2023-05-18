const pswdStateDesc = document.getElementById("pswdStateDesc");
const pswInput = document.getElementById("pswInput");

let shown = false;

function updatePswdState(){
    if(shown === false){
        shown = true;
        pswdStateDesc.innerText = "Hide Password";
        pswInput.setAttribute("type", "text");
    }
    else{
        shown = false;
        pswdStateDesc.innerText = "Show Password";
        pswInput.setAttribute("type", "password");
    }
}