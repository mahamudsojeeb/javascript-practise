const d = new Date();
//console.log(d);
d.setFullYear(2020);
//console.log(d);

const date1 = new Date(2022,3,4);
//console.log(date1);

date1.setMonth(7);
//console.log(date1);

const today = new Date();
const someDay=new Date();
someDay.setFullYear(2100,0,4);
if(today>someDay){
    console.log(today);
}
else{
    console.log(someDay);
}



