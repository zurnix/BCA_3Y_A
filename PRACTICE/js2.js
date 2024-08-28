// function greet(name,pro){         // parameter
//     console.log("Oye Hoye",name,"The",pro);
// }

// greet("zurnix","AMV editor")              // arguments


//----------------

// let fnn = function(num){
//     if(num%2==0){
//         console.log(num,"is even");
//         document.write(num,"is even")
//     }
//     else{
//         console.log(num,"is odd");
//         document.write(num,"is odd")
//     }
// }

// let fnn = function(num){
//     if(num%2==0){
//         return `${num} is EVEN`
//         // console.log(num,"is even");
//         // document.write(num,"is even")
//     }
//     else{
//     //     console.log(num,"is odd");
//     //     document.write(num,"is odd")
//         return `${num} is EVEN`
//     }
// }


// // fnn(323);

// let hold = fnn(prompt("Enter the number to check even/odd"))
// // fnn(prompt("Enter the number to check even/odd"))
// console.log(hold)



//--------------------

// function swap(a,b){
//     console.log("A : ",a,"B : ",b)
//     // let temp = a;
//     // a = b;
//     // b = temp;

//     // without 3rd var
//     a = a^b
//     b = a^b
//     a = a^b

//     // return [a,b];

//     console.log("swapped values")
//     console.log("A : ",a,"B : ",b)
// }
// // console.log(swap(1,2))
// // console.log(swap(2,3))
// a = prompt("Enter number 01")
// b = prompt("Enter number 01")
// swap(a,b)


//===============

// let add = (a,b) => a+b
// console.log(add(12,34))

//------------------ IIFE Function

// (function greet(name){
//     console.log("Hello",name)
// })(prompt("Enter ur name"))


//===============

// Function Expression
// let greet = (function (name){
//     // console.log("Hello",name)
//     return "Hello "+name
// })(prompt("Enter ur name"))


// console.log(greet)
// console.log("laaaaaaa")
// console.log(greet)
// console.log(greet)
// console.log(greet)
// console.log(greet)


console.log(12+67)
console.log(12+"67")
console.log(2*"67")
console.log("2"*"67")
console.log("Hi"*"67")
console.log(2*"hi")
console.log("12"-10*"3")



let x = 12; let y = "12";
console.log(x+y);
console.log("string",x==y);   //true
console.log("data type",x===y);   //false

let xx = document.getElementById("pp").innerText
document.getElementById("pp").innerHTML= xx + " "+ "zurnix"
document.write("LAAA")
console.log("YYYYYY")
// window.alert("xorxz")
console.log(typeof 79.9)


// function lele(){
//     let yaa = prompt("daaaal de")
//     document.write(yaa) 
// }