const myNum = [1,2,3]

// const total = myNum.reduce((acc,currval) => {
//     console.log(`accumulator:${acc} and currentvalue ${currval}`);
    
//     return acc + currval
   
// },0)

const total = myNum.reduce((acc,currval) => (acc + currval),0)

// console.log(total);


const shoppingCart = [
    {
        itemName:"web dev course",
        price:5999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:7999
    },
    {
        itemName:"data science course",
        price:15999
    },
]

const priceToPay =shoppingCart.reduce((acc,items) => acc + items.price,0)
console.log(priceToPay);