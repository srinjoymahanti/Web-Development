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