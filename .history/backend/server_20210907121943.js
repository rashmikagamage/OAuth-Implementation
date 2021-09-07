const express = require('express');
const app = express();
const cors = require("cors");
const passport = require("passport")
app.use(cors())
const  bodyParser = require('body-parser');
const passport = require('passport');
app.use(bodyParser.json());
const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
var GITHUB_CLIENT_ID = "e2a09705be4f6da4f173";
var GITHUB_CLIENT_SECRET = "2fbf426fb207ea903081a5276eab4796a8ad1c50";
const CALLBACK_URL = "http://localhost:3000/github"

app.get('/hello', (req, res) => {
  //res.redirect("http://localhost:3000/github")
  url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${CALLBACK_URL}`
  res.redirect(url);
  })

const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: CALLBACK_URL
},
function(accessToken, refreshToken, profile, cb) {
 console.log(profile);
  cb(null,profile)
}
));

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
 });






app.listen(process.env.port || 4000, function () {
  // process.env.port useful when host this app
  console.log("now listening for requests");
});
