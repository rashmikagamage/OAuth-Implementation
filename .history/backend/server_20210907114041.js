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
const GitHubStrategy = require('passport-github2').Strategy;
app.use(passport.initialize());
app.use(passport.session());


var GITHUB_CLIENT_ID = "Iv1.cffdb6482eaf04d5";
var GITHUB_CLIENT_SECRET = "dcb8630e681519268fec024ec5d499d902bc7ed7";
const CALLBACK_URL = "http://localhost:3000/github"



passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/github"
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    console.log(profile)
    // To keep the example simple, the user's GitHub profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the GitHub account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}
));

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
    res.redirect('http://localhost:3000/github');
  });

  app.get('/hello', (req, res) => {
    console.log(req)
    const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${CALLBACK_URL}`
    res.redirect(url);
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
