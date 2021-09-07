const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors())


const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;



app.get('/', function (req, res) {
  res.send('hello world')
})



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
