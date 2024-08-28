let mode = document.getElementById("mode")

// function day(){
//     mode.style.background = "#d2f8f8"
//     mode.style.color = "black"
// }

// function night(){
//     mode.style.background = "#444444"
//     mode.style.color = "white"
// }

let temp = 1
let btnchange = document.getElementById("textchange")
function daynight(){
    if (temp == 1) {
        mode.style.background = "#d2f8f8"
        mode.style.color = "black"
        btnchange.innerText = "Night"
        btnchange.innerText.
        temp = 0
    }

    else{
        mode.style.background = "#444444"
        mode.style.color = "white"
        btnchange.innerText = "Day"
        temp = 1
    }    
}