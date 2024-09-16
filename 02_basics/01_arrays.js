//Array

const myArr = [0,1,2,3,4,5,6,7]
const myHeroes = ["Hanuman","Shree Ram"]

const myNewArr = new Array(1,2,3,4)
// console.log(myNewArr[1]);

//Array methods

// myNewArr.push(5)
// myNewArr.push(6)
// myNewArr.unshift(0)
// myNewArr.pop()
// myNewArr.shift()

// console.log(myNewArr);
// console.log(myNewArr.includes(1));
// console.log(myNewArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);










