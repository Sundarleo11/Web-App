const http=require('http');
const port =8085;

function requestHandler(req,res){
    console.log(req.url);
    res.end("Have a nice day !");
}

const server=http.createServer(requestHandler);

server.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server is up and running :",port);
})