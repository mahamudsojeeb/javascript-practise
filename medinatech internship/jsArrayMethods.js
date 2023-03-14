const fruits = ["Banana", 3, "Apple", "Mango"];

//tostring and join makes the array into String
let fruitsString=fruits.toString();
console.log(fruitsString);
let fruitsStringToJoin=fruits.join(" & s");
console.log(fruitsStringToJoin);
//push pop
let popMethod=fruits.pop();
let pushMethod=fruits.push("mangoo");

let shiftMethod=fruits.shift();

console.log(shiftMethod);
console.log(fruits);

fruits.unshift("new Element at begin");
console.log(fruits);
//concat create new array
fruits.concat("abcd");
console.log(fruits.concat("abcd"));


//splice and slice
//splice adds new items to an array
//slice makes a piece of an array
console.log(fruits);
let deleted=fruits.splice(2,1,"xyz","jsjsjsjsjjs");
console.log(fruits);
console.log(deleted);
let returnFromSlice=fruits.slice(2,4);
console.log(returnFromSlice);






