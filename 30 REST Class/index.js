const express=require("express");
const app=express();
const port=8080;
const path=require("path");//to use the "public" and "views" folder
const {v4:uuidv4}=require('uuid');

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"srinjoy",
        content:"i love conding"
    },
    {
        id:uuidv4(),
        username:"arya",
        content:"coading is life"
    }
];

app.get("/posts",(req,res)=>{
    res.render("index",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new");
})
app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id ===p.id);
    res.render("show",{post});
})
