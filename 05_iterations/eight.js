const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc:${acc} and currval${curval}`);
//     return acc + curval 
    
// }, 0)       // acumulato dont know where to start so 0 to get him start)


const myTotal = myNums.reduce((acc, curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        iteamName: "js Course",
        price: 2999
    },
    {
        iteamName: "python Course",
        price: 9999
    },
    {
        iteamName: "mobile dev Course",
        price: 5999
    },
    {
        iteamName: "data scientist Course",
        price: 12999
    },

]


const priceToPAy = shoppingCart.reduce((acc, iteam) => acc + iteam.price,0)

console.log(priceToPAy);