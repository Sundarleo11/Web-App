const http=require('http');
const port =8085;

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h4>Have a nice day !</h4>");
}

const server=http.createServer(requestHandler);

server.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server is up and running :",port);
})