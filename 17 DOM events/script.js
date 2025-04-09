//let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=click;//when a button is clicked
//     btn.onmouseenter=hover;//when cursor is hovered over a button
// }
// function click(){
//     alert("You clicked the button");
// }
// function hover(){
//     console.log("You hover over the button");
// };



// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     // btn.addEventListener("click",sayHello);
//     btn.addEventListener("dblclick",sayWorld);
// }
// function sayHello(){
//     alert("hello");
// }
// function sayWorld(){
//     alert("world");
// };


// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("Paragraph is clicked");
// })
// let box=document.querySelector("div");
// box.addEventListener("mouseenter",function(){
//     console.log("Hovered over the box");
// })


// let p=document.querySelector("p");
// let div=document.querySelector("div");
// let btn=document.querySelector("button");
// function changeColor(){
//     console.log(this.innerText);//here "this" means the element
//     this.style.backgroundColor="blue";
// }
// p.addEventListener("click",changeColor);
// div.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);


// let inp=document.querySelector("input");
// // inp.addEventListener("keydown",function(){
// //     console.log("you pressed the key");
// // })
// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("character moves forward");
//     }
//     else if(event.code=="ArrowDown"){
//         console.log("character moves backward");
//     }
//     else if(event.code=="ArrowLeft"){
//         console.log("character moves left");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("character moves right");
//     }
// });


// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     // let userName=document.querySelector("#username");
//     // let passWord=document.querySelector("#password");

//     let userName=this.elements[0];
//     let passWord=this.elements[1];
//     console.log(userName.value);
//     console.log(passWord.value);

// });