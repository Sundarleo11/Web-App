const http=require('http');
const port =8085;

const server=http.createServer();

server.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server is up and running :",port);
})