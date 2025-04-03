// console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText="lorem";


// console.log(document.getElementById("mainImg"));
// console.log(document.getElementById("mainImg").id);
// console.log(document.getElementById("mainImg").tagName);
// console.log(document.getElementById("mainImg").src);


// console.log(document.getElementsByClassName("oldImg"));
// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="Assets/Spider-Man.png";
//     console.log(`value of image no${i} is changed`);
// };


// console.dir(document.querySelector("p"));//seelect first p element
// console.dir(document.querySelector("#description"));//select first element with id= description
// console.dir(document.querySelector(".oldImg"));//select first element with class= oldImg
// console.dir(document.querySelector("div a"));//select first div with first a tag
// console.dir(document.querySelectorAll("p"));//select all p elements


// console.log(document.querySelector("p").innerText);//shows the visible text contained in a node
// console.log(document.querySelector("p").textContent);//shows all full text,also hiddens
// console.log(document.querySelector("p").innerHTML);//shows the full markup code

// let para=document.querySelector("p");
// // para.innerText="I am Peter Parker";
// para.innerHTML=`<b> ${para.innerText} </b>`;


// let img=document.querySelector("img");
// console.log(img.getAttribute("id"));
// img.setAttribute("id","spiderImg");
// console.log(img.getAttribute("id"));
// img.setAttribute("src","Assets/Amazing-spiderman.jpg");


// let haeding=document.querySelector("h1");
// haeding.style.color="red";
// haeding.style.backgroundColor="purple";


// let heading=document.querySelector("h1");
// // heading.classList.add("green");
// // heading.classList.add("wavy");
// // heading.classList.remove("green");
// // console.log(heading.classList.contains("green"));//check if the classexists or not
// // console.log(heading.classList.contains("wavy"));
// console.log(heading.classList);
// console.log(heading.classList.toggle("green"));//add or remove a certain class
// console.log(heading.classList);


// let h4=document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);
// let ul=document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// let image=document.querySelector("img");
// console.log(image.previousElementSibling);
// console.log(image.nextElementSibling);
// image.nextElementSibling.style.color="red";



