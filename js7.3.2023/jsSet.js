const letters=new Set(['a','b','b']);
letters.add('x');
console.log(letters);


const letter = new Set(["a","b","c"]);

// List all Elements
let text = "";
letter.forEach (function(value) {
  text += value;
})
console.log(text);
