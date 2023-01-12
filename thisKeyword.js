// Shortest Js Program and this keyword

var x = 10;

console.log(window.x);             //10
console.log(x);                    //10
console.log(this.x);               //10


/* All three statements results the same output.In any Js engine while it is of chrome,safari,firfox,etc the global
object is created ,in case of chrome js engine is v8 and the global object is called "window" and "this" keyword
refers to the global object. So "this" is equal to "window" in case of chrome. We can access the glbal object with 
or without using "this" or "window" keyword.
Whenever the js file is created the new global space is created and attched to the global object.*/