const express=require('express');
const port=8000;
const app=express();

app.listen(port,function(err){
    if(err){
        console.log(`error on server port:${port}`);
    }
    console.log(`server is up and running port:${port}`);
})