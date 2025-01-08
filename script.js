const display=document.getElementById("id")

function appearDisappear(){
    if (display.style.display=="none" || display.style.display==""){
        display.style.display="block"
        document.getElementById("idBtn").innerText="Hide"
        document.getElementById("idBtn").style.backgroundColor="red"
        document.getElementById("idBtn").style.border=" solid red"
        document.getElementById("idBtn").style.color="white"
        document.getElementById("idBtn").style.boxShadow="0 0 10px red"



    }
    else{
        display.style.display="none"
        document.getElementById("idBtn").innerText="Show Id Card"
        document.getElementById("idBtn").style.backgroundColor="white"
        document.getElementById("idBtn").style.border=" solid white"
        document.getElementById("idBtn").style.color="black"
        document.getElementById("idBtn").style.boxShadow="0 0 10px white"

    }
}
