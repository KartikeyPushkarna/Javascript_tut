/* Function along with its lexical scope bundled together to form a closure.

function x(){
    var a = 12;
    function y(){
        console.log(a);
    }
    return y;                           //returning the function y to the x
}
var z = x();
console.log(z);                         //function definition of y
z();                                    //12
// ------------------------------------------------------------
function x(){
    var a = 12;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;                           
}
var z = x();
console.log(z);              //function definition of y          
z();                        //100
// ----------------------------------------------------------------
function z(){
    var b= 200;
    function x(){
        var a = 12;
        function y(){
            console.log(a,b);
        }
        y();                          
    }
    x();   
}
z();
// ----------------------------------------------------------------------
 Uses of Closure=>
1.Module design pattern
2.currying
3.function like once
4.memoize
5.maintaining state in async world
6.iterators
7.settimeouts, etc.
--------------------------------------------------------------------------

// Example of Closure using settimeout=>
for(var i = 1;i<=5;i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000);
}
console.log("Hello Javscript");
output=>Hello Javascript
        6
        6   
        6
        6
        6

// =------------------------------------------------------------------------
for(let i = 1;i<=5;i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000);
}
console.log("Hello Javscript");
output=>Hello Javascript
        1
        2   
        3
        4
        5*/

//  --------------------------------------------------------------------------
/*function z() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log(x)
            }, x * 1000);

        } close(i);

    } console.log("Hello Javscript")
}
z();
Output=>Hello Javascript
        1
        2   
        3
        4
        5*/

