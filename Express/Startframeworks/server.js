const express=require('express');
const port=8081;

const app=express();

app.get('/',(req,res)=>{
    res.send('<h2>Cool, it is running !</h2>');
})

app.listen(port,(err,data)=>{
    if(err){
        console.log('err',err);
    }
    console.log("server is up and running on port:",port);
})