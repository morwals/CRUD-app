const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        const con= await mongoose.connect(process.env.MONGO_URI);
        
        console.log("mongodb connected");
    }catch(err){
        console.log(err);
        process.exit;
    }


}
module.exports=connectDB;