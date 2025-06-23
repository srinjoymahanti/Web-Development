const express=require("express");
const app=express();
const port=8080;
const path=require("path");//to use the "public" and "views" folder

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"srinjoy",
        content:"i love conding"
    },
    {
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
    posts.push({username,content});
    res.redirect("/posts");
})