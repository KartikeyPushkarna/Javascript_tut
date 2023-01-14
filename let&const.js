/* What is temporal dead zone?

The time between the hoisting and the variable assigned it's value.
What is reference error?-> When we are trying to access the variables which are in temporal dead zone it shows 
reference error.*/

// console.log(a);                 //reference error
// let a = 10;

// ----------------------------------------

// let b = 10;
// let b = 1000;                   //Syntax error


// -------------------------------------------
const y= 10;
y = 100;                        //type error
console.log(y);

/* different memory is allocated to let and const variables instead of global space.
let & const are hoisted but differently*/