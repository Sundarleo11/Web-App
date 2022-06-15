const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ExpressApp');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error while connect MongoDB"));


db.once('open',function(){
    console.log("Connect to mongoDB");
});

module.exports=db;