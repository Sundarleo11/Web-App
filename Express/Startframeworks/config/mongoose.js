//required liberay
const mongoose =require('mongoose');

//connect to data bases
mongoose.connect('mongodb://localhost/contact_list');

//check connection
const db=mongoose.connection;

//error
db.on('error',console.log.bind("error on while connect DB"));

//connection status 
db.once('open',function(){
    console.log("successful connect to the db");
})