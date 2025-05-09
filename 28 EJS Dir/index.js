const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("views",path.join(__dirname,"/views"));//it helps to find the views file from any directory
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs", { user: "Srinjoy"  });
  });


app.get("/rollDice", (req, res) => {
    let diceVal= Math.ceil(Math.random()*6);
    res.render("rollDice.ejs",{num:diceVal});
});


app.get("/users/:username",(req,res)=>{
    const followers=["adam","bob","steve","john"];
    let {username}=req.params;
    res.render("users.ejs",{username,followers});
})


app.get("/instagram/:name",(req,res)=>{
    let username=req.params.name;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs",{username});
    }
})