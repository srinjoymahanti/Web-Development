setTimeout(function fn(){
    console.log("hello");
},3000);

setTimeout(()=>{
    console.log("cello");
},10);

for(let i=0;i<10000000000;i++){
    if(i==9000000000)console.log("third for loop ends");

}

console.log("hi");