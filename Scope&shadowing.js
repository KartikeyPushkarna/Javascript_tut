/*What is block?
What is block scope?
What is shadowing in js?

Block is defined as the compound statements using curly braces it is used where we want to put a single statement 
and we can commpound statements into one using block.


--------------------------------------------------------------
{
    var a =10;
    let b= 20;
    const c = 30;
    console.log(a);        //10
    console.log(b);        //20
    console.log(c);        //30
}
console.log(a);            //10
console.log(b);            //Uncaught ReferenceError: b is not defined
console.log(c);            //Uncaught ReferenceError: c is not defined

-------------------------------------------------------------------

var d = 30;
let e = 40;
const f = 50;
{
    var d =10;
    let e= 20;
    const f = 30;
    console.log(d);          //10
    console.log(e);          //20
    console.log(f);          //30
}
console.log(d);              //10
console.log(e);              //40
console.log(f);              //50

let and const are block scope that's why they are given these kind of output.
var d is shadowing the value of inner d that is in the scope and change the value of it.

/* Scope:
1.Global
2.Block
3.Script
As all these seen in the browser.

There is the concept of illegal shadowing in which we cannot shadow let to var but we can do var to let like=>


let h =10;
{
   var h = 80;
   console.log(h); //syntax error
}
console.log(h);

*/
