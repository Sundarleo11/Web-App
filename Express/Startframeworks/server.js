const express=require('express');
const path=require('path');
const port=8081;
const db=require('./config/mongoose');
const Contact=require('./model/Contact');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

/*
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
*/

var contactList=[
    
     {name:'sundar',phone:8870829330},
     {name:'Manisha',phone:8870829330},
     {name:'Kumar',phone:8870829330},
     {name:'kamala',phone:8870829330},
]


app.get('/',(req,res)=>{
    // console.log(req);
    // res.send('<h2>Cool, it is running !</h2>');
   // console.log(req.name)

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

  //  contactList.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log("error on while create contact"); return;
        }
        console.log("****",newContact);
        return res.redirect('back');
    })

   // return res.redirect('/');
})

app.get('/delete-contact/',(req,res)=>{
    //console.log(req.params);
    console.log(req.query);
    let phone=req.query.phone;

    // let contactIndex=contactList.findIndex(contact=>contact.phone==phone);

    // if(contactIndex != -1){
    //     contactList.slice(contactIndex, 1);
    // }


    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }
    return res.redirect('back');

})

app.listen(port,(err,data)=>{
    if(err){
        console.log('err',err);
    }
    console.log("server is up and running on port:",port);
})