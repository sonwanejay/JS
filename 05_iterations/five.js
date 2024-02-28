const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (iteam) => {
//     console.log(iteam);
// })

// function printme(iteam) {
//     console.log(iteam);
    
// }
// coding.forEach(printme)

// coding.forEach( (iteam, index, Arr) => {
//     console.log(iteam, index, Arr);
// } )

const myCoding = [
    {
        langaugeName: "javascript",
        langaugFileeName: "js",
    },

    {
        langaugeName: "java",
        langaugFileeName: "java",
    },
    {
        langaugeName: "python",
        langaugFileeName: "py",
    }
]

myCoding.forEach( (iteam) => {
    console.log(iteam.langaugeName);
})