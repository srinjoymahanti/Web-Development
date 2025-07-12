const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("Connection successful");
    })
    .catch((err)=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User=mongoose.model("User",userSchema);

// const user1=new User({
//     name:"adam",
//     email:"adam@gmail.com",
//     age:28
// });
// user1.save();
// const user2=new User({
//     name:"eve",
//     email:"eve@gmail.com",
//     age:28
// });
// user2
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:28},
//     {name:"bruce",email:"bruce@gmail.com",age:38},
//     {name:"ram",email:"ram@gmail.com",age:48},
// ]).then((res)=>{
//     console.log(res);
// });

User.findById("6870936f5820c23d061de05f")
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });