var http = require('http');

var requisicao = function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1> Texto Browser</h1>");
    response.end();
}

var server = http.createServer(requisicao);

var resultado = function() {
    console.log('Servidor em funcionamento');
}

server.listen(3000, resultado);