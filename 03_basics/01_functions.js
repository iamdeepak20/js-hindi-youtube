function sayMyName(){
    console.log("D");
    console.log("e");
    console.log("e");
    console.log("p");
    console.log("a");
    console.log("k"); 
}
// sayMyName()

//function addTwoNumbers(number1,number2) {
    // console.log(number1+number2);   
//}

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(5,6)

// console.log("Result:", result);


function loginUserMessage(username) {
    if(!username){
        console.log("please enter username");  
        return 
    }
    return `user name is ${username}`
}

// console.log( loginUserMessage("Raunak"));
// console.log(loginUserMessage("Rohit"));


function calculateCartPrice(value1,value2,...num1) {
    return num1
}
//console.log (calculateCartPrice(10,20,30,40,50,));



const user ={
    username:"Deepak",
    price:"149"
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username:"Shyam",
    price:"399"
})

const mynewAraay = [100,200,300,400,500]

function returnSecondValue(getArray) {
    return getArray[2]
}
// console.log( returnSecondValue(mynewAraay));
console.log(returnSecondValue([100,200,300,400,500]));

