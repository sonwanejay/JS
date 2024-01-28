// var a = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    console.log("INNER;", a);
    //var c = 30.  // 300 will be frint (always avoid using var )

}

console.log(a);
// console.log(b);
// console.log(c);