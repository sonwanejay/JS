// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best Number");
    }
    // console.log(element);
}
// console.log(element); 

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value; ${i}`);
    for (let j = 1; j <=10; j++) {
    // console.log(`inner loop value; ${j} and inner loop ${i}`);    
    // console.log(i + '*' + j + ' = ' + i*j);
    }
    
    
}

let muArray = ["Flash", "Batman", "Superman"]
// console.log(muArray.length);
for (let index = 0; index < muArray.length; index++) {
    const element = muArray[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break //***** Break the loop ******//
//     }
//     console.log(`value of i is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue // ****** continue loop by skiping it ****** //
    }
    console.log(`value of i is ${index}`);
    
}
