const express=require('express');
const path=require('path');
const port=8081;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

//middleware1
app.use((req,res,next)=>{
    req.name="Aperna";
   // console.log("middleware 1 called");
    next();
})
//middleware2
app.use((req,res,next)=>{
    //console.log("middleware 2 called");
    console.log("myname from MW 2:",req.name);
    next();
})


var contactList=[
     {name:'sundar',phone:8870829330},
     {name:'Manisha',phone:283932330},
     {name:'Kumar',phone:1239438403},
     {name:'kamala',phone:29383920},
]


app.get('/',(req,res)=>{
    // console.log(req);
    // res.send('<h2>Cool, it is running !</h2>');
    console.log(req.name)

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


app.post('/create-contact',(req,res)=>{
  /// return res.redirect('/home');
    //  console.log(req);
    //   console.log(req.body);
    //   console.log(req.body.name);
    //  console.log(req.body.phone);
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });

    contactList.push(req.body);

    return res.redirect('/');
})


app.listen(port,(err,data)=>{
    if(err){
        console.log('err',err);
    }
    console.log("server is up and running on port:",port);
})