const marvel_heros = ["Thor", "IronMan", "spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//  const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros] 
// console.log(allNewHeros);

const anotherArray = [1, 2, 3,[4, 5, 6, ],7 ,[6, 7[4, 5] ]]
const real_Another_Array = anotherArray.flat(Infinity)
// console.log(real_Another_Array);

console.log(Array.isArray("Jay"));
console.log(Array.from("Jay"));
console.log(Array.from({name: "Jay"})); /// Intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));