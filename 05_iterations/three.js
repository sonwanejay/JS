// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const iterator of arr) {
//     console.log(iterator);
    
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('UN', "United Nation")
map.set('FR', "France")
map.set('CN', "China")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, "->", value);
    
}

const myObject = {
    "game1": "NFS",
    "game2": "spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, "->", value);
// }. // error object is not iterable



