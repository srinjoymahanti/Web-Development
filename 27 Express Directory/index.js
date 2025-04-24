const express = require("express");
const app = express();

let port =8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


// app.use((req,res)=>{
//     console.log("request recieved");
//     res.send("<h1>Fruits</h1> <ol><li>apple</li><li>orange</li>");
// });

// app.get("/",(req,res)=>{
//     res.send("You contacted root path");
// })
// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// })
// app.use((req,res)=>{
//     res.send("Not found");
// })

// app.post("/",(req,res)=>{
//     res.send("You send a post request");
// })

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let code=`<h1>Welcome to the page of @${username} and id is ${id}</h1>`
    res.send(code);
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>");
    }
    console.log(q);
    res.send(`<h1>You searched for ${q}</h1>`);
})