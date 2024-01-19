const name = "Jay"
const repoCount = 1

// console.log(name + repoCount + " Value"); //not right syntax just ex.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Jay-Sonwane")
// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(-3,2)
console.log(anotherString);

const NewStringOne= "   Jay  "
console.log(NewStringOne);
console.log(NewStringOne.trim());

const url = "https://jay.com/jay%20sonwane"
console.log(url.replace('%20', '-'));
console.log(url.includes('jay'));
console.log(gameName.split('-'));