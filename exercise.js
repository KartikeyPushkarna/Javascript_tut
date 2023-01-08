//array of object=
const users = [
    {firstname:"kartik", lastName:"sharma", age:23},
    {firstname:"ayush", lastName:"sharma", age:75},
    {firstname:"sagar", lastName:"sharma", age:21},
    {firstname:"elon", lastName:"sharma", age:35},
    {firstname:"messi", lastName:"sharma", age:22}
];

//find list of fullname
//like- ["kartik sharma"]
const output = users.map(x => x.firstname +" "+ x.lastName);
console.log(output);
// --------------------------

//we need to find out how many people have same age
const output2 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(output2);//acc={23:1, 21:1, 25:1,22:1}

//find out firstname whose age is less than 30
const output3 = users.filter((x)=> x.age<30).map((x) =>
    x.firstname);
console.log(output3);

const output4 = users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstname);
    }
    return acc;
},[])
console.log(output4);