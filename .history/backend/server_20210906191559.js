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



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.port || 4000, function () {
  // process.env.port useful when host this app
  console.log("now listening for requests");
});
