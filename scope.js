// What is lexical environment and scope?

// function a(){
//     console.log(b);               //10
//     c();            s
//     function c(){
//         console.log(b);           //10
//     }
// }
// var b = 10;
// a();

// ----------------------------------

function a(){
    var b = 10;
    console.log(b);               //10
    c();
    function c(){
        console.log(b);           //10
    }
}
a();
console.log(b);                   //scope.js:24 Uncaught ReferenceError: b is not defined at scope.js:24:13


/*Lexical means in heirarachy.Lexical environment is "local scope" + "lexical environment" of its parent. In the 
case of above example function c is lexicaly inside the function a. */