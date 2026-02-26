const marvel_heros = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America"];
const dc_heros = ["Batman", "Superman", "Wonder Woman", "Flash"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[5][0]);

//const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

//Spread func in arrays

const allHeros = [...marvel_heros, ...dc_heros];
//console.log(allHeros);

const AnotherArr = [1, 2, 3, [4, 5 , 6], 7, [8, 9, 10]];

const realAnotherArr = AnotherArr.flat(Infinity);
//console.log(realAnotherArr);

console.log(Array.isArray("shradha"))
console.log(Array.from("shradha"))
console.log(Array.from({name: "shradha"})) 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
