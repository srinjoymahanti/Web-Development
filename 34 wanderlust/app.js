const express=require('express');
const app=express();
const mongoose=require("mongoose");
const Listing=require("..models/listings.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("");
}
app.get("/",(req,res)=>{
    res.send("i am root");
})
app.get("/testListing",async(req,res)=>{
    let sampleListing=new Listing({
        title:"my villa",
        description:"by the beach",
        price:1200,
        location:"Goa",
        country:"India",
    });
    await sampleListing.save();
    console.log("sample is saved");
    res.send("successful testing");
})
app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
})
