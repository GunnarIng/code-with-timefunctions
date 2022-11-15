window.addEventListener("DOMContentLoaded", main)

let timeoutRef;

function main(){
    // Start på programmet
    // main är en callback funktion

    timeoutRef = setTimeout(changeBackgroundColor, 4000)
    addEventListeners()
   
}

function changeBackgroundColor(){
    document.body.style.background = "grey"
}

function addEventListeners(){
 const cancelBtn = document.getElementById ("cancel")
 cancelBtn.addEventListener("click", cancelBackgroundChange)
}


function cancelBackgroundChange(){
    clearTimeout(timeoutRef)
}
