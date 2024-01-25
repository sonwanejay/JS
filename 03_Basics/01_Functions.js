
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
console.log(loginUserMsg());

