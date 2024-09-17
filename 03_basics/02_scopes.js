var c = 300
let a = 400
const b = 250

if(true){
    let a = 10
    const b = 20

    // console.log("Inner a:",a); 
    // console.log("Inner b:",b);
    
    // var c = 30
    c = 30
}
// console.log(a);
// console.log(c);
// console.log(b);

function one(){
    const username = "Deepak"

    function two(){
        website ="Youtube"
        console.log(username);      
    }

   // console.log(website);
    two()
    
}
//one()

if(true){
    const username = "deepak"
    if(username === "deepak"){
        const website = "Youtube"
    //   console.log(username + website);       
    }
    //console.log(website);

}
//console.log(username);


//************Interesting ***************/


console.log(addOne(5))  //No error
function addOne(num){
    return num + 1
}
addOne(5)


//addTwo(3)   \\gives error
const  addTwo = function(num1){
    return num1 + 2
}
console.log(addTwo(5))





