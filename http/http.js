const http=require('http');


const myServer=http.createServer((req,resp)=>{
    console.log("New Request Recieved");
    console.log("Request URL: ",req);


   // resp.end("Hello from Server");
switch(req.url){
    case "/":
        resp.end("Welcome to Home Page");  
        break; 

    case "/about":
        resp.end("Welcome to About Page");
break;
    case "/contact":
        resp.end("Welcome to Contact Page");

    default:
        resp.end("404 Not Found");
}
});


myServer.listen(8000,()=>{
    console.log("Serer is listening on port 3000");
});
