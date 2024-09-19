// for of 

//["","","","",""]
//[{},{},{},{},{}]

const myArray = [1,3,5,7,9]
for (const arr of myArray) {
  //  console.log(arr);
    
}

let greeting = "Good morning"
for (const greet of greeting) {
    //console.log(greet);
    
}

//Maps

const map = new Map()
map.set('ind',"India")
map.set('nep',"Nepal")
map.set('jap',"Japan")
map.set('ind',"India")   //map don't take duplicate

// console.log(map);

for (const [key,value] of map) {
    //console.log(key, ":-", value);
    
}


const myObj = {
  game1:"bgmi",
  game2:"cod",
  game3:"rc24"
}
for (const [key,value] of myObj) {
  //console.log(key, ":-", value);
  
}
//object don't work in this syntax