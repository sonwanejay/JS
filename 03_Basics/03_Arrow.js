const user = { 
    username: "Jay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Jay"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Jay"
//     console.log(this.username)
// }
// chai()


const chai = ()=>{
    let username = "Jay"
    console.log(this);
}
// chai()

// const addtwo = (num1, num2) => {             // one way to do it 
//     return num1 + num2
// }


// const addtwo = (num1, num2) => num1 + num2          // another way to do it 


// const addtwo = (num1, num2) => (num1 + num2)         // ----- // ----- //

const addtwo = (num1, num2) => ({username: "Jay"})


console.log(addtwo(3, 4));


// const myArray = [2, 5, 5, 7, 6,]
// myArray.forEach()