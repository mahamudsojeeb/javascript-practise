let dayNames=["saturday","sunday","monday","tuesday","wednesday","thusday","friday"];
let date=new Date(2022,2,5);
switch(date.getDay()){
    case 4:
    case 5: console.log("soon is weekened");
    break;
    case 0:
    case 6: console.log("this is weekened");
    break;
    default:console.log("you are working");

}
