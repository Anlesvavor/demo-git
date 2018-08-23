const http = require("http");


//primer forma
function server(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo.");
    response.end();
}

http.createServer(server).listen(7070);

//segunda forma
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo.");
    response.end();
}).listen(6060);

//tercer forma
http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo.");
    response.end();
}).listen(5050);
