// const instaUser = new Object()   //singleton

const instaUser ={}

instaUser.name = "Virat"
instaUser.age = 36
instaUser.isLogin = false

// console.log(instaUser);

const regularUser = {
    email : "some@email.com",
    fullName:{
        userFullName:{
            firstName:"Hardik",
            lastName:"Pandiya"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);

// in database value also come like this
const user =[
    {1:"a",
     email:"@email.com"
    },
    {1:"a",
        email:"@email.com"
     },
     {1:"a",
        email:"@email.com"
     },
       {1:"a",
        email:"@email.com"
     },
     {1:"a",
        email:"@email.com"
       },
]
// console.log(user[2].email);

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("isLogin"))

const league = {
   leagueName : "IPL",
   WinnerPrizeMoney : "20cr",
   myFavPlayer:"Virat"
}
// console.log(league.myFavPlayer);

// const {myFavPlayer:favPlayer} = league

// console.log(myFavPlayer);
console.log(favPlayer);



// [
//     {},
//     {},
//     {}
// ]





