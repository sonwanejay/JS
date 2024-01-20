// Arrays

const myArray = [0, 1, 2, 3, 4, 5]
const Heros = ["Itachi", "Jiraya", "Asuma"]

// console.log(myArray);
// console.log(myArray[0]);

// console.log(Heros);
// console.log(Heros[2]);


const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray2[1]);

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()             // removes the last value

// myArray.unshift(0)
// myArray.shift()


// console.log(myArray.includes(4));
// console.log(myArray.indexOf(2));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

//***** slice, splice ****//

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1, 3)
console.log("c ",myArray);
console.log(myn2);
