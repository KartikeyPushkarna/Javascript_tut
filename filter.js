const arr = [5,1,2,3,6];

//filter odd values
function isOdd(x){
    return x%2;
}
//filter even
function isEven(x){
    return x%2 == 0;
}
//filter greater than four
function greaterThanfour(x){
    return x>4;
}

// const output = arr.filter(greaterThanfour);
// ----------------------
// const output = arr.filter(function even(x){
//     return x%2==0;
// })
// ------------------------
// const output = arr.filter((x)=>{
//     return x%2==0;
// })
// ------------------------
// const output = arr.filter((x)=>x>4)
const output = arr.filter((x)=>x<3);

console.log(output);