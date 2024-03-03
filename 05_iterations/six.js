const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (iteam) => {
//     console.log(iteam);
//     return iteam
// })
// console.log(values);   // foreach dont return any value 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (numi) => {
//    return numi > 4      // scope need return to return the value

// })

const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4 )[
//         newNums.push(num)
//     ]
// } )
// console.log(newNums);

const books = [
    { title: 'book One', genre: 'Fiction', publish: 1981,
edition: 2004 },
    { title: 'book two', genre: 'Non-Fiction', publish: 1982,
edition: 2008 },
    { title: 'book Three', genre: 'History', publish: 1989,
edition: 2007 },
    { title: 'book Four', genre: 'Non-Fiction', publish: 1999,
edition: 2009 },
    { title: 'book five', genre: 'science', publish: 2009,
edition: 2014 },
    { title: 'book Six', genre: 'Fiction', publish: 1985,
edition: 2015 },
    { title: 'book Seven', genre: 'History', publish: 2000,
edition: 2016 },
    { title: 'book eight', genre: 'Science', publish: 2005,
edition: 2017 },
    { title: 'book nine', genre: 'History', publish: 2020,
edition: 2020 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
}) // use of return while using scope

console.log(userBooks);

