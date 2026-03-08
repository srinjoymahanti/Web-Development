const pr1=new Promise((res,rej)=>{
    console.log("pr1 exec function calling");
    setTimeout(function timerpr1(){
        console.log("timerpr1 set timeout calling");
        let randomNum=Math.floor(Math.random()*100);
        if(randomNum%2==0){
            res(randomNum);
        }else{
            rej(randomNum);
        }
    },1000);
})
pr1.then(()=>{console.log("calling fulfilled function A")},()=>{console.log("calling the ejected function B")});

setTimeout(function timercb(){
    console.log("timercb set timeout calling");
},4000);

const pr2=new Promise(function exec(res,rej){
    setTimeout(function timerpr2(){
        console.log("timerpr2 set timeout calling");
        let randomNum=Math.floor(Math.random()*100);
        if(randomNum%2==0){
            res(randomNum);
        }else{
            rej(randomNum);
        }
    },1000);
})
pr2.then((val)=>{console.log("calling fulfilled function C ",val)},(val)=>{console.log("calling fulfilled function D ",val)});

for(let i=0;i<10000000000;i++){};
console.log("THE END OF CODE");