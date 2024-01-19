
// ** Primitive Datatypes **
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // Datatype // null = object 
let userEmail;
// console.log(typeof useremail);


const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 70550843533333n
// console.log(typeof bigNumber);

//********************************** 

// ** Refrence Datatype (Non_Primitive) **
// Array, Obejct, Functions

const heros = ["Itachi", "Jiraya", "Asuma"] // Array
let mySelf = {
               name: "Jay",
               age: 21,
} // Objects


             const myFunction = function(){
                console.log("Hello World");
             }
// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primiitive)

let myInstaName = "sonwanejay_"

let anotherName = myInstaName
anotherName = "JaySonwane"
//console.log(myInstaName);
//console.log(anotherName); // stack

let userOne ={
   email: "user@gmail.com",
   upi: "user@okhdfc"
    
}

let userTwo = userOne
userTwo.email="jsonwan@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);  // Heap (refrence)

