const numbers=[34,23,9,18,222];
numbers.forEach(myfun);
//numbers.forEach(console.log(i));
numbers.map(myfun);

function myfun(value){
    value=value*2;
    return value;
}

console.log(numbers);
console.log(numbers.filter(arrayfilter))
function arrayfilter(value){
    return value<100;
}
//map method creates a new array by performing aa function on each element
//every check all elements is passed or not
//some check some array value passed or not
//