let fruits = ["Banana", "Orange", "Apple", "Mango"];
let sortedfruits= fruits.sort();
console.log(sortedfruits);
console.log(fruits.reverse());


//numeric sort
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a,b){return a-b}));


//max and min
console.log(Math.max(1,4,11));


//sorting objects based on prperty
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort(function(a,b){return(a.year-b.year)}));
