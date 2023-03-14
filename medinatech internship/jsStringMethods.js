let name="Mahamudul Hasan"
let firstName=name.slice(0,9);//end position not included
console.log(firstName);
let lastName=name.slice(10)
console.log(lastName);

let lastNameFromLast=name.slice(-15,-5);
console.log(lastNameFromLast);
let newName=name.replace("Hasan","Shajib");
console.log(newName);
let upperCase=newName.toUpperCase();
console.log(upperCase);
let text1="   Hello".concat(" ","world   ");//concat is like +
let text2=text1.trim();

let helloText="Hello World";
let hello=helloText.charAt(4);
console.log(hello);
let arryofChar=helloText.split(" ");
console.log(arryofChar);

