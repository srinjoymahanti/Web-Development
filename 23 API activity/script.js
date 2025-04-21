let url="http://universities.hipolabs.com/search?name="
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    
    let colArr=await getCollages(country);
    show(colArr);
})
function show(colArr){
    let list=document.querySelector("ol");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
async function getCollages(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("Error is:",e);
        return [];
    }
}