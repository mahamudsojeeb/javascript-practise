let ranValue=Math.random();
console.log(ranValue);
console.log(Math.floor(ranValue*10));


function getRndInteger(min,max){
    return ( Math.floor(Math.random()*(max-min))+min);

}