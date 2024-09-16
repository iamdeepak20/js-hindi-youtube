const marvel_heros = ["Ironman","Spiderman","Thor"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_Arr = [1,2,3,[4,5,6],[7,8,[9,10]]]
const another_real_Arr = another_Arr.flat(Infinity)

// console.log(another_Arr);
// console.log(another_real_Arr);

console.log(Array.isArray("deepak"));
console.log(Array.from("deepak"));
console.log(Array.from({name:"deepak"}));  //interesting

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1,score2,score3));





