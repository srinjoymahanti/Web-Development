const { faker }= require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen("8080",()=>{
  console.log("server is listening to port:8080");
})

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"srinjoy31"
});

let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// let q="INSERT INTO user(id,username,email,password) VALUES ?";
// //Replace placeholders with the array values
// // let user=[
// //   ["123a","aryaa","arya@gmail.coma","abcda"],
// //   ["123b","aryab","arya@gmail.comb","abcdb"],
// // ];
// let data=[];
// for(let i=0;i<=100;i++){
//   data.push(getRandomUser());
// }


app.get("/",(req,res)=>{
  let q="SELECT COUNT(*) FROM user";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let count=result[0]["COUNT(*)"];
      res.render("home.ejs",{count});
    })
  }catch(err){
    console.log(err);
    res.send("some error in data base");
  }
})

app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
    connection.query(q,(err,users)=>{
      if (err) throw err;
      res.render("showusers",{users});
    })
  }catch(err){
    console.log(err);
    res.send("some error in data base");
  }
})

//Edit Route
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id="${id}"`;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user=result[0];
      res.render("edit",{user});
    })
  }catch(err){
    console.log(err);
    res.send("some error in data base");
  }
})

//Update in Database Route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE ID='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user=result[0];
      if(formPass != user.password){
        res.send("Wrong Password");
      }else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(req,result)=>{
          if (err) throw err;
          res.redirect("/user");
        })
      }
    })
  }catch(err){
    console.log(err);
    res.send("Some err in db");
  }
})

//Create a new user in data base
app.get("/user/new",(req,res)=>{
  res.render("new");
})
app.post("/user",(req,res)=>{
  let {id,username,email,password}=req.body;
  let q=`INSERT INTO user (id,username,email,password) VALUES ('${id}','${username}','${email}','${password}')` ;
  try{
    connection.query(q,(err,users)=>{
      if (err) throw err;
      res.redirect("/user");
    })
  }catch(err){
    console.log(err);
    res.send("some error");
  }
})

//Delete user from data base
app.delete("/user/:id",(req,res)=>{
  let {id}=req.params;
  let q=`DELETE FROM user WHERE ID='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      res.redirect("/user");
    })
  }catch(err){
    console.log(err);
    res.send("some error");
  }
})