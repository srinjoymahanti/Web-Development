// let arr=[1,2,3,,4,5];
// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);


// let arr=[1,2,3,,4,5];
// arr.forEach((el)=>{
//     console.log(el);
// });


// let arr=[
//     {
//         name:"srinjoy",
//         marks:94,
//     },
//     {
//         name:"arya",
//         marks:97,
//     },
//     {
//         name:"ram",
//         marks:92,
//     }
// ];
// arr.forEach((element)=>{
//     console.log(element);
// })
// arr.forEach((element)=>{
//     console.log(element.marks);
// })


// let arr=[1,2,3,4,5];
// let double=arr.map((el)=>{
//     console.log( el*2);
// });

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
// let even=arr.filter((el)=>{
//     return el%2 == 0;
// })
// console.log(even);


// let statement=[2,4].every((el)=>(el%2 == 0));
// console.log(statement);


// let nums=[1,2,3,4];
// let finalVal=nums.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);


// let arr=[1,9,2,7,6,3,5,11,4];
// max=-1;
// let result=arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else return max;
// });
// console.log(result);

// let nums=[2,,4,6,8,10,1];
// let ans=nums.every((el)=>el%2 == 0);
// console.log(ans);

// let arr=[9,2,7,6,3,5,11,4];
// let result=arr.reduce((min,el)=>{
//     if(min>el){
//         return el; 
//     }else return min;
// });
// console.log(result);


// let arr=[1,2,9,3,4,7,6,5,11];
// let minimum=Math.min(...arr);//takes every elements from array
// console.log(minimum);

// let char=[..."hello"];
// console.log(char);
// let even=[2,4,6,8,10];
// let odd=[1,3,5,7,9];
// let num=[...even,...odd];
// console.log(num);


// const data={
//     name:"srinjoy",
//     age:21,
// };
// const dataCopy={...data,id:123,password:"abcd"};
// console.log(dataCopy);


// function arr(){
//     console.log(arguments);
//     console.log(arguments.length);
// }
// function arr(...args){
//     return args.reduce((sum,el)=>sum+el);
// }


// let names=["tony","bruce","steve","peter"];
// let [winner,runnersup,...others]=names;
// console.log(winner)
// console.log(runnersup)
// console.log(others)


// const students={
//     name:"arya",
//     age:21,
//     city:"kolkata",
//     marks:94,
// };
// let{name:nam,city:place,age:umar}=students;