function hello(){
    console.log("inside hello function");
    console.log("hello");
};
function demo(){
    console.log("Calling hello() function");
    hello();
};
console.log("Calling demo() function");
demo();
console.log("Done!");
