const express=require('express');
const port=8000;
const app=express();

//Added router for customer any request
app.use('/',require('./router'));

app.listen(port,function(err){
    if(err){
        console.log(`error on server port:${port}`);
    }
    console.log(`server is up and running port:${port}`);
})