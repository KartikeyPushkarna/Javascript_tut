const arr = [5,1,3,2,6]

//Double - [10, 2,6,4,12]
//Triple - [15,3,9,6,18]
//binary - ["101","1","11","10","110"]
function double(x){
    return 2*x;
}
function triple(x){
    return 3*x;
}
function binary(x){
    return x.toString(2);
}
//map function is trasformation function
// ----------------------------------
// const output = arr.map(function binary(x){
//     return x.toString(2);
// })
// -------------------------------
// const output = arr.map(binary);
const output = arr.map((x)=>{
    return x.toString(2);
})
console.log(output);

