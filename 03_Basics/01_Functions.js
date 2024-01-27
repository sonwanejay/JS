
function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("Y");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // Parameters
//     console.log(number1 + number2);

// }

// const result = addTwoNumbers(5, 5)
// addTwoNumbers(3, null) // Arrgument
// console.log("Result:", result);




function addTwoNumbers(number1, number2){ // Parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(5, 5)
// 
function loginUserMsg(username){
    if //(username === undefined). //Works the same 
         (!username) {              // Another way to write it.
        console.log("Please Enter Username");
        return

    }
    return `${username} just Logged in`
}

// console.log(loginUserMsg("Jay"));
// console.log(loginUserMsg());


function calculateCartPrice(val1, val2, ...num1){
   return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user ={
    username: "Jay",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

// handleObject({
//     username: "Sam",
//     price: 399
// })


const myNewArrey = [200, 400, 600, 100]

function returnfourthValue(getArray) {
    return getArray[4]
    
}
// console.log(returnfourthValue(myNewArrey));

 console.log(returnfourthValue([200, 400, 500, 1000]));

 