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

app.post("/",(req,res)=>{
    res.send("You send a post request");
})