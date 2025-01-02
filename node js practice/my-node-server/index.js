const http = require (http);
//creating a server
const server = http.createServer((req,res) =>{
res.writeHead(200,{ 'Content-Type': 'text/plain'});
res.end('Hello World!!');

});

// startiing a server 
const PORT = 3000;
server.listen(PORT, () =>{
    console.log ('server running on port ')
}) 

// Explanation:
// http.createServer() sets up a basic server.
// req represents the incoming request, and res is used to send a response.
// writeHead() sets the HTTP status and headers.
// res.end() sends the final response.npm 