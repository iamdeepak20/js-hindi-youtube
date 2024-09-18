// this -> reffered current context
// context -> context means value, what value have your variable stored.

const user = {
    username:"Deepak",
    price:"299",

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
                
    }
}

// user.welcomeMessage()
// user.username = "Sumit"
// user.welcomeMessage()

// console.log(this);


// function cricket(){
//     let cricketerName = "Dhoni"
//     console.log(this);
//      console.log(this.cricketerName);
    
// }

// cricket()


//const cricket = function (){
        //let cricketerName = "Dhoni"
     //console.log(this);
    //  console.log(this.cricketerName);
//}
//cricket()


const cricket = () => {
           let cricketerName = "Dhoni"
     console.log(this);
     console.log(this.cricketerName);
}
// cricket()

const addTwo = (num1,num2) => {
    return num1 + num2
    //if we use {} bareces in arrow functoion, then we used return key word .
}
// console.log(addTwo(4,5));


// const addThree = (num1,num2,num3) => num1+num2+num3

// const addThree = (numl,num2,num3) => (numl+num2+num3)
//console.log(addThree(3,4,5));
//if we use () breces then not use return.


//how to return a object like this

const newObj = () => ({name : "deepak"})
//console.log(newObj())


// const myArray = [2,3,4,7,5]

// myArray.forEach()