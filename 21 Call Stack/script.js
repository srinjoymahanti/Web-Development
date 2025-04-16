// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// };
// function demo(){
//     console.log("Calling hello() function");
//     hello();
// };
// console.log("Calling demo() function");
// demo();
// console.log("Done!");


function one(){
    return 1;
};
function two(){
    return one() + one();
};
function three(){
    let ans=two() + one();
    console.log(ans);
};
three();
