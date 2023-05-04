
const mongose=require("mongoose")
const connectdb=async()=>{
   try{
      const connect=await mongose.connect("mongodb+srv://admin:admin@cluster1.orisdpx.mongodb.net/?retryWrites=true&w=majority");
      console.log("connewcted")

   }catch(err){
      console.log(err)
      process.exit(1)
   }
}

  
module.export=connectdb;



