// What is Hoisting?

console.log(x);                     //output - undefined
console.log(getName);               //output- full function
getName();                          //output - Bro is Learning Js
console.log(y);                     //output-Hoisting.js:6 Uncaught ReferenceError: y is not defined  at Hoisting.js:6:13
console.log(getName2);                 //output-undefined->in the cae of arrow func it behaves like a variable.
getName2();                          //output-Hoisting.js:8 Uncaught TypeError: getName2 is not a function at Hoisting.js:8:1
console.log(getName3);                   //output- undefined->in the cae of this func definition it behaves like a variable.
getName3();                                //output-Hoisting.js:10 Uncaught TypeError: getName2 is not a function at Hoisting.js:10:1
var x = 10;

var getName2 = () =>{
    console.log("Namaste");
}

var  getName3 = function(){
    console.log("Hello!");
}
function getName(){
    console.log("Bro is Learning Js");
}

/*Hoisting -> The answer lies in the memory creation phase of global execution context that all the variables and function get their memory 
allocation with their values , as in the case of variable in memory phase the "undefined" value is allocated and in the case of function the
"definition of that function" is allocated as the value.
That's why this code is given those types of output.
Not defined and undefined both are different.*/