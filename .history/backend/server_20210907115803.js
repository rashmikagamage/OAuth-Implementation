const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors())
const  bodyParser = require('body-parser');
const passport = require('passport');
app.use(bodyParser.json());
const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;

app.use(cors({
  origin: ['http://localhost:4000/hello', 'https://www.google.com/','http://localhost:3000','http://localhost:3000/github']
}));


var GITHUB_CLIENT_ID = "Iv1.cffdb6482eaf04d5";
var GITHUB_CLIENT_SECRET = "dcb8630e681519268fec024ec5d499d902bc7ed7";
const CALLBACK_URL = "http://localhost:3000/github"



  app.get('/hello', (req, res) => {
   
    //res.redirect("http://localhost:3000/github")
  // const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${CALLBACK_URL}`
  res.redirect(CALLBACK_URL);
    })



app.listen(process.env.port || 4000, function () {
  // process.env.port useful when host this app
  console.log("now listening for requests");
});
