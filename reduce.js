const arr = [5,1,3,2,6];

//sum or max

// function sum(arr){
//     let sum = 0;
//     for(let i = 0;i<arr.length; i++){
//         sum= sum + arr[i];
//     }
//     return sum;
// }
// we can transform above logic simply by using reduce function

const output = arr.reduce(function(acc,curr){ //curr- representing the array value & acc - is used to acculumate these values
    acc = acc + curr;
    return acc;
},0);
//second argument is used the initial valur for the accumulator.
console.log(output);

//max value fnction using reduce
const output2 = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);

console.log(output2)