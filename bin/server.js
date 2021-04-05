var io = require('socket.io')();
var fs = require('fs'); //require filesystem module
var Gpio = require('onoff').Gpio;
var Calorimetro = new Gpio(5, 'in');


function handler (req, res) { //create server
  fs.readFile(__dirname + '/views/index.html', function(err, data) { 
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on('connection', function(socket){

console.log("UN NUEVO CLIENTE CONECTADO CON EL SOCKET ID: " + socket.id);
console.log(Calorimetro.readSync());

}); 

//AQUI COLOCAREMOS TODOS NUESTROS EVENTOS DE TIPO io.sockets.emit

module.exports = io;