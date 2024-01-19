// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 24, 5, 7)
// let myCreatedDate = new Date("2024-1-14")
let myCreatedDate = new Date("01-19-2024")
// console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now()

// console.log(mytimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time`);

newDate.toLocaleString('default', {
    weekday:"long"
})

