// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 1=",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 2=",data.fact);
// })
// .catch((err)=>{
//     console.log("ERROR-",err);
// })


let btn=document.querySelector("#button1");
btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    let para=document.querySelector("p");
    para.innerText=fact;
})
let url="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(err){
        console.log("error:",err);
        return "No fact found";
    }
}

let btn2=document.querySelector("#button2");
btn2.addEventListener("click",async ()=>{
    let link=await getImage();
    let img=document.querySelector("img");
    img.setAttribute("src",link);
})
let url2="https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }catch(err){
        console.log("error:",err);
        return "No image found";
    }
}