// How function works in Js and Variable Environment=>

var x = 1;              
a();                                  //output- 10
b();                                  //output- 100
console.log(x);                       //output- 1


function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x =100;
    console.log(x);
}