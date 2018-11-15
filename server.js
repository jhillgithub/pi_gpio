const path = require('path');
const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;


var app = express();
app.use(express.static(path.join(__dirname, 'static')));
const server = http.createServer(app);

app.get('/', function(req, res){
  res.sendFile('index.html');
});

server.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});

app.get('/status/:pin', function(req, res) {
  res.json({"status": req.params.pin});
});

const Gpio = require('onoff').Gpio;
const pin = new Gpio(16, 'out');
app.get('/toggle/:pin', function(req, res) {

  pin.writeSync(pin.readSync() ^ 1);
  res.json({"status": pin.readSync()});
})
