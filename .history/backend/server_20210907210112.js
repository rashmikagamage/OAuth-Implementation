const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const passport = require("passport")
const  bodyParser = require('body-parser');
app.use(bodyParser.json());
const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
var session = require('express-session');
const GitHubStrategy = require('passport-github').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
var GITHUB_CLIENT_ID = "e2a09705be4f6da4f173";
var GITHUB_CLIENT_SECRET = "2fbf426fb207ea903081a5276eab4796a8ad1c50";
const CALLBACK_URL = "http://localhost:3000/auth/github/callback"
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'SECRET' }));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:4000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.log("pdsdd")
  // asynchronous verification, for effect...
  process.nextTick(function () {
    console.log(accessToken);
    done(null, profile);
  });
}
));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email','user:follow' ,'repo','delete_repo'] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.header("Access-Control-Allow-Origin", "*");
   res.redirect('http://localhost:3000/auth/github/callback');
 });



 passport.use(new TwitterStrategy({
  consumerKey: "u326tWfIcQO03GLU8TGaGqfZQ",
  consumerSecret: "dpM91VErbxjO98JDF8SUjnmcVe6EDFLIgyK89FJyZwed9pXEWL",
  callbackURL: "http://localhost:4000/auth/twitter/callback"
},

function(token, tokenSecret, profile, cb) {
  process.nextTick(function () {
    console.log(accessToken);
    done(null, profile);
  });
}
));

app.get('/auth/twitter',
passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
passport.authenticate('twitter', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

app.listen(process.env.port || 4000, function () {
// process.env.port useful when host this app
console.log("now listening for requests");
});
