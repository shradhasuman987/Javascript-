//array
const myArr = [1, 2, 3, 4, 5];
//console.log(myArr);
//console.log(typeof myArr);
//console.log(myArr.length);
//console.log(myArr[0]);
//console.log(myArr[myArr.length - 1]);

//Array Methods
//myArr.push(6);
//console.log(myArr);
//myArr.unshift(9);
//console.log(myArr);
//myArr.pop();
//console.log(myArr);
//myArr.shift();
//console.log(myArr);

//console.log(myArr.includes(8));
//console.log(myArr.indexOf(8));

//const newArr = myArr.join()

//console.log(newArr);
//console.log(typeof newArr);

//slice(does not change the original array) and splice(Changes original array)

console.log("A" , myArr);
const myn1 = (myArr.slice(1, 3)); 

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("C" , myArr);


