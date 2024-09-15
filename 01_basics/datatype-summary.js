//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// https://262.ecma-international.org/5.1/#sec-11.4.3


//******************************************

//Stack(Primitive), Heap(Non-Primitive)

let myFriendName = "SumitThakur"
let anotherFriend = myFriendName

anotherFriend = "AmanThakur"
console.log(myFriendName)
console.log(anotherFriend)


let user1 = {
    email : "user@google.com",
    upiId : "user@ybl"
}
let user2 = user1
user2.email = "deepak@email"

console.log(user1.email);
console.log(user2.email);


