// Immediately Invoked function Expression(IIFE)
/*gobal scope ke polution se problem hoti hai kae bar ,to uss global scope ke jo variables hai , jo bhi wha
 declaration hai , uske polution ko hatane e liye hum iife ka use karte hai. */



//normal function

// function cricket(){
//     console.log(`I am playing cricket`);
// }
// cricket()



//iife

(function cricket(){
    //named iife
    console.log(`I am playing cricket`);
    
})();
 
//if  we write two iife then after 1st one end we seperate them with ; (colon )
((name)=>{
    //unamed iife
    console.log(`I am playing cricket with ${name}`);
    
})("Deepak")