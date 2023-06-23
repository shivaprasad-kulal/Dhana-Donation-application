const express =require("express")
const router=express.Router()


//----------------------------2---------------
 const reciept=require("../models/dbcon") //---------6
router.get('/',async(req,resp)=>{
    try{
        const receipts=await reciept.find()//----------6

        resp.json(receipts)//------------------6
      console.log("get request")
    }
    catch(err){
        resp.send('ERROR:'+err)
    }
})
//-------------------4---------------------------
const curdate=new Date().toLocaleDateString();

//const str = curdate;
//const [day,month, year] = str.split('/');
//const date = new Date(+year, +month - 1, +day+1);
//console.log(curdate); 


//-----------------date------------------

router.get('/:id',async(req,resp)=>{
    try{
        const receipts=await reciept.find({receiptno:req.params.id})//----------6

        resp.json(receipts)//------------------6
      console.log("get request")
    }
    catch(err){
        resp.send('ERROR:'+err)
    }
})

router.get('/sh/:id1',async(req,resp)=>{
    try{
        const receipts=await reciept.find({contactno:req.params.id1})//----------6

        resp.json(receipts)//------------------6
      console.log("get request")
    }
    catch(err){
        resp.send('ERROR:'+err)
    }
})
router.get('/iva/:id2',async(req,resp)=>{
    try{
        var names=req.params.id2;
    const receipts=await reciept.find({name:{$regex:names}})//----------6

        resp.json(receipts)//------------------6
      console.log("get request")
    }
    catch(err){
        resp.send('ERROR:'+err)
    }
})
//---------------------------------------------excell-----------




//-----------------------------------------------------
router.post('/',async(req,res)=>{
    const User =new reciept({
        receiptno:req.body.receiptno,
        contactno:req.body.contactno,
        name:req.body.name,
        amount:req.body.amount,
        date:curdate
       
    })
    
    try{
        const rec=await User.save()
        res.json(rec) 
        res.status(200).send('Status: OK')
    }
    catch(err)
    {
        
        res.status(400).send('Status: Bad Request')
    }
})
module.exports=router
//----------------------------4-------------------

