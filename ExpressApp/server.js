const express=require('express');
const port=8000;
const app=express();
const cookies=require('cookie-parser');

const DB=require('./Config/mongoose');
const expressLayouts = require('express-ejs-layouts');

//session cookiess
const passport=require('passport');
const passport_local=require('./Config/passport_local_startegy');
const session=require('express-session');




app.use(express.urlencoded());
app.use(cookies());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//setup the views engine
app.set('view engine','ejs');
app.set('views', './views');


app.use(session({
    name: 'ExpressApp',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//Added router for customer any request
app.use('/',require('./router'));


app.listen(port,function(err){
    if(err){
        console.log(`error on server port:${port}`);
    }
    console.log(`server is up and running port:${port}`);
})