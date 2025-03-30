// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("arya",21);


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));


// let sum=function(a,b){//function expression
//     return a+b;
// }
// console.log(sum(1,2));


// function multipleGreet(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// multipleGreet(greet,10)


// function oddEvenFactory(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }
//     else console.log("wrong input");
// }
// let func=oddEvenFactory("even");
// func(3);

// const calculator={
//     num:55,
//     add: function(a,b){
//         return a+b;
//     },
//     subtract(a,b){
//         return a-b;
//     },
// };
// console.log(calculator.num);
// console.log(calculator.add(1,2));
// console.log(calculator.subtract(3,1));


const sum=(a,b) =>{// arrow function
    console.log(a+b);
};
const mul=(a,b) =>(a*b);// implicit arrow function