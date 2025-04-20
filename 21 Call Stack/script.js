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
// saveToDb("srinjoy")
// .then((result)=>{
//     console.log("Data 1 saved");
//     console.log("Result of promise:",result);
//     return saveToDb("arya");
// })
// .then((result)=>{
//     console.log("Data 2 saved");
//     console.log("Result of promise:",result);
//     return saveToDb("xyz");
// })
// .then((result)=>{
//     console.log("Data 3 saved");
//     console.log("Result of promise:",result);
// })
// .catch((error)=>{
//     console.log("promise not resolved");
//     console.log("Result of promise:",error);
// })


// let h1=document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("Color Changed!");
//         },delay);
//     }) 
// };
// colorChange("red",1000)
// .then(()=>{
//     console.log("Color chnaged to Red");
//     return colorChange("blue",1000);
// })
// .then(()=>{
//     console.log("Color chnaged to Blue");
//     return colorChange("green",1000);
// })
// .then(()=>{
//     console.log("Color chnaged to Green");
//     return colorChange("orange",1000);
// })
// .then(()=>{
//     console.log("Color chnaged to Orange");
// })


// async function greet(){//It is use to returns a promise
//     throw "weak connection";//To print the error
//     return "hello";
// };
// greet()
// .then((result)=>{
//     console.log("Promise is resolved");
//     console.log("result is:",result);
// })
// .catch((err)=>{
//     console.log("Promise rejected with error:",err);
// })


// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.ceil(Math.random()*10);
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


// let h1=document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`Color changed to ${color}`);
//             resolve("Color Changed!");
//         },delay);
//     }) 
// };
// async function demo() {
//     await colorChange("red",1000);
//     await colorChange("blue",1000);
//     await colorChange("yellow",1000);
//     await colorChange("green",1000);
//     colorChange("orange",1000);
// }


// let h1=document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let num=Math.ceil(Math.random()*10);
//             if(num>3){
//                 reject("Promise Rejected");
//             };
//             h1.style.color=color;
//             console.log(`Color changed to ${color}`);
//             resolve("Color Changed!");
//         },delay);
//     }) 
// };
// async function demo() {
//     try{
//         await colorChange("red",1000);
//         await colorChange("blue",1000);
//         await colorChange("yellow",1000);
//         await colorChange("green",1000);
//         await colorChange("orange",1000);
//     }catch(err){
//         console.log("Error caught");
//         console.log(err);
//     }
//     let a=5;
//     console.log(a);
//     console.log("New number=",a+3);
// }