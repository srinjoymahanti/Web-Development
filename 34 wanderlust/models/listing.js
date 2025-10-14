const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        set:(v)=>v===""?"https://images.unsplash.com/photo-1555396273-1146e2d2a49b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNvY29udXQlMjB0cmVlJTIwYXQlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600":v,
    },
    price:Number,
    location:String,
    country:String
})

const Listing=mongoose.model("Listing",listingSchema);
models.export=Listing;