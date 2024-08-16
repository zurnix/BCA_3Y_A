// document.write("<h1>Hello")
// document.write("<h1>Hello")
// document.write("<h1>Hello")

// document.getElementById("demo").innerText="GLA University"


//--------

let temp = 1
let content = document.getElementById("demo").innerText
function show(){
    if(temp){document.getElementById("demo").innerText="GLA University"
    temp = 0}
    else{
        document.getElementById("demo").innerText= content
        temp = 1
    }

}