const express = require('express');
const app = express();
//const cors = require("cors");
//app.use(cors())
const  bodyParser = require('body-parser');
const passport = require('passport');
app.use(bodyParser.json());
const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
const GitHubStrategy = require('passport-github2').Strategy;
app.use(passport.initialize());
app.use(passport.session());


var GITHUB_CLIENT_ID = "e2a09705be4f6da4f173";
var GITHUB_CLIENT_SECRET = "3075fc90dce25571bcffee33a3d417365469c5a9";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


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
