const http=require('http');
const port =8085;
const fs=require('fs');


function requestHandler(req,res){
  //  console.log(req.url);
   // res.writeHead(200,{'content-type':'text/html'});
   /*fs.readFile('./index.html',function(err,data){
       if(err){
           console.log('err',err);
           return res.end("<h1>Error</h1>");
       }
       return res.end(data);
   })
    // res.end("<h4>Have a nice day !</h4>");*/

    let filepath;
    switch(req.url){
        case '/':
            filepath='./index.html';
            break;
        case '/profile':
            filepath='./profile.html';
            break;
         default:
            filepath='./404.html';
            break;

    }
    fs.readFile(filepath,function(err,data){
        if(err){
            console.log('err',err);
            return res.end("<h1>Error</h1>");
        }
        return res.end(data);
    })

}

const server=http.createServer(requestHandler);

server.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server is up and running :",port);
})