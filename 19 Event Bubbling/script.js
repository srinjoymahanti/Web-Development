let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div is clicked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();//stop bubbling in the console
    console.log("ul is clicked");
});
for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li is clicked");
    });
};