const express=require('express');
const port=8000;
const app=express();

const DB=require('./Config/mongoose')
const expressLayouts = require('express-ejs-layouts');




app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




//Added router for customer any request
app.use('/',require('./router'));

//setup the views engine
app.set('view engine','ejs');
app.set('views', './views');


app.listen(port,function(err){
    if(err){
        console.log(`error on server port:${port}`);
    }
    console.log(`server is up and running port:${port}`);
})