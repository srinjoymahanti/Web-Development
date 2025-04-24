const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("views",path.join(__dirname,"/views"));//it helps to find the views file from any directory
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// })
app.get("/", (req, res) => {
    res.render("home.ejs", { user: { name: "Srinjoy" } });
  });