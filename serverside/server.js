const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const port = process.env.PORT ;
const server=express()
 const url='mongodb://localhost/receipt'
 mongoose.connect(url,{useNewUrlParser:true});

 const con=mongoose.connection

 con.on('open',function(){
    console.log("connected....")

 })
 server.use(cors())
 //---------------------------1----------------------
 server.use(express.json())
 const receiptrouter=require('./routers/receipt')
 server.use('/receipt',receiptrouter)
 //--------------------------------------------------------------Excel----------------
 
 //---------------------3------------------------
 server.listen(port, () => {
   console.log("server started")

   // console.log(`Example app listening at http://localhost:${port}`);
 });
 /*server.listen(9000,()=>{
 console.log("server started")

})*/
