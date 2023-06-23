const mongoose =require("mongoose")
const userschema=new mongoose.Schema({
    receiptno:{
        type:Number,
        required:true,
        index: {
            unique: true,
        }

    },
    contactno:{
        type:Number
        

    },
    
    name:{
        type:String

    },
    
    amount:{
        type:Number

    },
    
    date:{
        type:String

    },
    

});
userschema.path('contactno').validate(function validatePhone() {
    return ( this.contactno > 999999999 && this.contactno <= 9999999999 );
  });
//---------------------5---------
module.exports=mongoose.model('receipt',userschema)