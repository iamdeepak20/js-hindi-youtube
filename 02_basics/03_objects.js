//singleton

//object create


//object literals

mySym = Symbol("key1")

const jsUser = {
    name:"Deepak",
    "fullName":"Deepak Kumar Mandal",
    [mySym]:"myKey1",
    age:21,
    email:"deepak@google.com",
    city:"Madhubani",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thursday"]
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(jsUser["fullName"]);
// console.log(jsUser.fullName);


jsUser.email = "deepak@facebook.com"
// Object.freeze(jsUser)
jsUser.email = "deepak@amazone.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`)
}

console.log(jsUser.greeting2());

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());







