const mongoose=require('mongoose');

const MongooseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }

})

const Contact=mongoose.model('Contact',MongooseSchema);

module.exports=Contact;