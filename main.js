window.addEventListener("DOMContentLoaded", main)


function main(){
    // Start på programmet
    // main är en callback funktion

    setTimeout(changeBackgroundColor, 4000)
   
}

function changeBackgroundColor(){
    document.body.style.background = "grey"
}



