let car={name:"truck",model:"abc",color:"white"};

const person={
    firstName:"mahamudul",
    lastName:"hasan",
    age:23,
    fullName:function() {
        return this.firstName+" "+this.lastName

    }
};
console.log(person.age);
console.log(person["age"]);
console.log(person.fullName())
//do not declare Strings,numbers and booleans as objects
var x=new String();
console.log(x);
