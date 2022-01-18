const express=require('express');
const path=require('path');
const port=8081;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var contactList=[
     {name:'sundar',phone:8870829330},
     {name:'Manisha',phone:283932330},
     {name:'Kumar',phone:1239438403},
     {name:'kamala',phone:29383920},
]
app.get('/',(req,res)=>{
    // console.log(req);
    // res.send('<h2>Cool, it is running !</h2>');

    return res.render('home',{
        title:'First ejs page !',
        contact_list:contactList//nameing convesion
    });
})

app.get('/index',(req,res)=>{
    return res.render('index',{
        title:'index'
    })
})

app.listen(port,(err,data)=>{
    if(err){
        console.log('err',err);
    }
    console.log("server is up and running on port:",port);
})