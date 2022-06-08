# Web-App

Node js
=======
This will launch the Command Prompt. To confirm Node is installed type node -v which will print the current version number. 
To confirm NPM is installed type npm -v which will print its current version number.

node -v  v16.13.0
npm  -v  8.1.0


Session -1
===========

Step 1: Folder Name:Nodews
--------------------------

Process (commit:work flow node)
------------------------------

The process object is a global object and can be accessed from anywhere. There are several methods available in a process object.
It will check to bottom

Step 2: Folder Name:Modules_node_js
-----------------------------------

Modules (commit:Modules)
-----------------------
The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. 
The module is a variable that represents the current module, and exports is an object that will be exposed as a module. 
So, whatever you assign to module.exports will be exposed as a module.

Session - 2
===========

Step 1: Folder Name:Basichttpserver
------------------------------------

basichttp (commit:server)
------------------------
step 1: localhost:8085 and 127.0.0.1.8085  both are synonyms IP address
 
basichttp (commit:requestHandler)
---------------------------------
Step 1: requestHandler does two thing one is print the url message and other sending the responce text.

basichttp (commit:ServingHtml)
--------------------------------
Step: 1 requestHandler too assigned content text it will responce to return html formate content

basichttp (commit:Read)
--------------------------------
Step: 1  Read the files using fs keyword. it's default Nodejs modules.

New liberarly nodemon -->Automatic server restart
npm install -g nodemon
To run the comment must be: nodemon filename

basichttp (commit:multiplepage)
--------------------------------
Step: 1 created Three html page like profile,index and 404.then switch case method rendering respective page

Session - 3(MVC)
================
Framworks
========
         1.Rupy and Rails
		 2.happy js
		 3.Meter js
		 4.koa
		 5.sails
		 6.Express
		 all the framwors majore different is. the way of structure folder

		 
Folder Name: Express
----------------------

Startframework(commit:Returing responce from the server)
---------------------------------------------------------
Step 1: To created First Express server(port:8081) and  Returing responce from the server.

Startframework(commit:Http resquest)
-------------------------------------
Step 1: to analaysis what kind of request we are using ?(console.log(req))

Get-------->To get the data

Post------->To post the data

put--------> To fill exactly field data

patch------>To exchange one field data into othere data.

Delete----->To delete one field data.

Still now. M V C, control part had completed. Then view part
               =
views
=====
Using template engines with Express
====================================
A template engine enables you to use static template files in your application. 
At runtime, the template engine replaces variables in a template file with actual values, 
and transforms the template into an HTML file sent to the client. 
This approach makes it easier to design an HTML page

Some popular template engines that work with Express are Pug, Mustache, and EJS. 
The Express application generator uses Jade as its default, but it also supports several others.

Startframework(commit:ejs)
---------------------------
Step 1: npm install ejs
Step 2: import path in server file.either you can use
Step 3: Then gave set view engine file too rendered page. here set path not required. either you can use {app.set('views',path.join(__dirname,'views'));}

Startframework(commit:rendered ejs page)
---------------------------------------
Step 1: Added some ejs page and render the content

Startframework(commit:Locals in View)
---------------------------------------
Step 1:  Locals is Global object.
The locals property is an object that contains response local variables scoped to the request and because of this, 
it is only available to the view(s) rendered during that request/response cycle (if any).

Parameter: No parameters.

Return Value: Object

Startframework(commit:ContactList)
-----------------------------------
Step 1: created contactList and rendered from ejs home page.

Startframework(commit:urlencode)
-----------------------------------
Step 1: created post method with two field, as name and phone.

step 2:now communication clicent--->parse--->json formate(sended:javascript, received:json)

step 3:Then reverse Enginner method. Need add urlencode

step 4: To stroage name, phone value, then push too form.

Start The framework(commit:middleware)
--------------------------------
Middleware
========== 
Middleware to manipulation thedata from server.it's three argument,req,res and next();
Data management, application services, messaging, authentication, and API management are all commonly handled by middleware.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. 
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

work flow
=========
⚫ Execute any code.

⚫ Make changes to the request and the response objects.

⚫ End the request-response cycle.

⚫ Call the next middleware in the stack.

Startframework(commit:assets)
-----------------------------
step 1:import the static express

step 2: Added some styles

Startframework(commit:Delete)
-----------------------------
step 1:created  delete botton in home page.

step 2:then added get route too delete the phone number.

Session - 4(DataBase)
=====================

MEAN-Stackdeveloper,
MERN-Stackdeveloper

ORM-->object relation mapping -->object, value then mapp to sended to DataBase.

Here I'M going to use ODM-->object document mapper--->mongoose


Startframework(commit:mongoose)
------------------------------

Step to connection mongoose
==========================
step 1:required liberay
step 2:connect to data bases
step 3:check connection
step 4:error and connection status,
step 5:import the server connection lierary,


Startframework(commit:model)
-----------------------------
Step 1:create one folder name As Model,
step 2:The create Mongoose Schema
Step 3:then import to server file

Startframework(commit:popluating data)
--------------------------------------
step 1:to check data popluating in db.

Startframework(commit:fetching database to UI)
---------------------------------------------
step 1:change to name convenstion, and fetching into ui

Startframework(commit:Delete the id)
---------------------------------------------
step 1:to get param into url
step 2:connect to database and delete
step 3:changed contact and delete Icone

==============================================================================================================================


## Folder name:ExpressApp

ExpressApp(commit:create server)
----------------------------------
Step 1: interpolation ${}
setp 2:install the express and create the server.

ExpressApp(commit:routes)
--------------------------
sept 1: ctraete the routes(if come any request from customer--->index)


ExpressApp(commit:controller)
--------------------------
sept 1: ctraete the controller and display the simple content

ExpressApp(commit:created another controller and router)
--------------------------------------------------------
sept 1: ctraeted the router,controller and display the simple 

content(http://localhost:8000/user/profile)

ExpressApp(commit:view engine)
------------------------------
step 1:installed ejs

step 2:setup the views engine

step 3:rendered  some content too UI Part.



Manual Authentication
=================

Post(username/password)--->verify identity--->Stroage identity 

in token browser(in cookie)--->server user specific data-->Delete token on sign-off,


ExpressApp(commit:Setting up User Schema)
----------------------------------------
step 1: created model user.js 

step 2:then created userSchama

ExpressApp(commit:Rendering Pages for Sign up and Sign in)
----------------------------------------------------------
step  1:created signIn & signup module exports in user controller

step  2:created routes for signIn & signup (http://localhost:8000/user/sign_in)

ExpressApp(commit:Express Ejs layout)
------------------------------------------
step  1:installed express ejs layout

step  2:craeted header footer & layout in view folder and rendered respective webpage 

Step  3: added some styles 

ExpressApp(commit:Created Forms for Sign up and Sign in)
----------------------------------------------------------
step  1:Created Forms for Sign up and Sign in and updated the user controller

step  2: connect to Mongoose DB (ExpressApp)

cookies
=======
Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network. 
Specific cookies known as HTTP cookies are used to identify specific users and improve your web browsing experience.

ExpressApp(commit:cookie-parser)
---------------------------------
step 1:npm install cookie-parser

step 2:created cookie-parser server.js files and it will rendered user identify.

Authentication steps
====================
1.create user(sign up)

2.create session(sign in)

3.show the details of signined user on profile

4.sign-out

ExpressApp(commit:User Sign Up)
-------------------------------
setp 1:collect the user infomration and save it Mongoose DB.

Branch name:manual-local
========================
mannual Authentication
----------------------
ExpressApp(commit:Mannual Authentication)
-----------------------------------------
step 1:created the some route and signin page redirect to profile page

ExpressApp(commit:user details)
-----------------------------------------
step 1:who every sigin to prfile page it will show user name and email current profile page.

Passport JS Authentication
==========================
Passport js is the most popular library used for authentication with Node.js. One of the best parts is that it’s middleware based
- It uses session-cookies to store the identity of the authenticated user
- We can use it for multiple other authentication strategies other than local, have a look here:
- http://www.passportjs.org/ [Go to ‘Strategies’]
- Most popular authentication strategies:
- Local
- Google
- Facebook
- Github
- JWT
- Some things we you might want to handle (it’s simple)
- Send an email on sign up
- Handle reset password
- Store the count of incorrect passwords entered and lock the account if needed
Handling Visibility of Pages/Features
- Sign in Page:
- When a user is already signed in, there is no use of showing the sign in page again, why, because logically, sign in page is visible to logged out users.
- Sign Up Page:
- Same goes with this one
- It’s important to decide which part of the functionality of a website should be visible to which user or people who are not even authenticated.
- Example, if someone posted a question on Quora, then someone else would/wouldn’t be allowed to edit it is a decision we need to take as a developer.

ExpressApp(commit:passportStrategy)
----------------------------------

step 1: install passport and passport-local
step 2: setup the passport js ,serializer and deserializer
step 3:install session cookie,and created passport_local_startegy,chnaged controoler and routes

ExpressApp(commit:SetAuthenticated)
-----------------------------------
step 1:craeted authenticated in passport_local_startegy files and changed in router(user),server,
       check if the user is authenticated,the user is signed in, then pass on the request to the next function(controller's action)
step 2:req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the viewss	   
	  
Problem 1: to solved if user signed next it's won't show sign in page,
====================================================================
ExpressApp(commit:sign-in_problem)
--------------------------------
step 1: The user information show to profile page who had signed,
step 2: issue resloved 

problem 2: without mongo store,I facing problem,(user logedout after server restart)
====================================================================================
ExpressApp(commit:Setting up Mongo store for session cookies)
------------------------------------------------------------
step 1:npm installed connect-mongo: "^2.0.3",

step 2:Setting up Mongo store for session cookies

ExpressApp(commit: SingOut)
---------------------------
step 1: created sign In Sign Out, and Sign Up, once SingOut browser cookies going to remove,



                                               SASS
											   ====
Writing CSS is always interesting when you face some challenging designs, but with the normal ones, when the files get long, you need some help with looking up which part of the style needs to be changed, SCSS way of writing code helps a lot.

Some of the major advantages:

1.Easily displayed hierarchy of parent → child tags

2.Easily maintainable

3.A good number of libraries to convert to CSS in production mode

4.Variables allow us to store some common properties for the whole website/file

5.They are useful when we want to define color scheme for a website

6.Operators

7.We can do operations like +, -, /, *

8.We can even write trigonometric functions!
9.Mixins
