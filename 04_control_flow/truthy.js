const userEmail = []

if (userEmail) {
    console.log("Get user email");

} else {
    console.log("Don't have user email");

}


//falsy value

// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//truthy value

// "false", "0", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}



//Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 7
// val1 = undefined ?? 2 ?? 4
val1 = null ?? 5 ?? 8


console.log(val1);


//ternary operator

// condition ? true : flase

const phonePrice = 15000

phonePrice >= 10000 ? console.log("more than 10000") : console.log("less than 10000");
;
