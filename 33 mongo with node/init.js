const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:"neha",
        to:"sneha",
        message:"Hello there",
        created_at:new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        message:"how are you",
        created_at:new Date(),
    },
    {
        from:"tony",
        to:"mony",
        message:"Busy",
        created_at:new Date(),
    },
    {
        from:"rohan",
        to:"mohan",
        message:"Nice",
        created_at:new Date(),
    }
];
Chat.insertMany(allChats);