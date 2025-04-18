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


// function one(){
//     return 1;
// };
// function two(){
//     return one() + one();
// };
// function three(){
//     let ans=two() + one();
//     console.log(ans);
// };
// three();


// let h1=document.querySelector("h1");
// function colorChange(color,delay,nextColor){//nextColor is callback function
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColor) nextColor();
//     },delay);
// };
// //callback nesting
// colorChange("red",1000,()=>{
//     colorChange("orange",1000,()=>{
//         colorChange("green",1000,()=>{
//             colorChange("blue",1000);
//         });
//     });
// });


// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success:data is saved");
//         }else{
//             reject("failure:weak connection");
//         };
//     });
// };
// let request=saveToDb("srinjoy");//request->promise object
// request.then(()=>{
//     console.log("promise is resolved");
// })
// .catch(()=>{
//     console.log("promise not resolved");
// })