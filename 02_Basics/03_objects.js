// Singleton
// object.creat

// object literals
const jsUser = {
    name : "Jay",
    age : 21,
    Location : "Pune",
    email :"jsonwane@mail.com",
    isLoggedIn : false,
    lastLoggedinDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

jsUser.email = "JAsjjka@hmail.com"
// Object.freeze(jsUser)
jsUser.email = "dfjgkdnkg@hmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User ");
}
jsUser.greetingTwo = function(){
        console.log(`Hello JS User, ${this.name}`);
    }
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());