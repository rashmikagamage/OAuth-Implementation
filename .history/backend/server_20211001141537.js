const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const hostname = "127.0.0.1";
const port = 4000;
const session = require("express-session");
const GitHubStrategy = require("passport-github").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const passport = require("passport");
const bodyParser = require("body-parser");
const { profile } = require("console");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: "SECRET" }));

//Client credentials for Git
const GITHUB_CLIENT_ID = "e2a09705be4f6da4f173";
const GITHUB_CLIENT_SECRET = "2fbf426fb207ea903081a5276eab4796a8ad1c50";
const CALLBACK_URL = "http://localhost:3000/auth/github/callback";

//serializing
passport.serializeUser(function (user, done) {
  done(null, user);
});

//deserializing
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

//github strategy with passport js
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        done(null, profile);
      });
    }
  )
);

//end point for github
app.get(
  "/auth/github",
  passport.authenticate("github", {
    scope: ["user:email", "user:follow", "repo", "delete_repo"],
  }),
  function (req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  }
);

//callback point
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:3000/login",
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/auth/github/callback");
  }
);

//Strategy for Twitter
passport.use(
  new TwitterStrategy(
    {
      consumerKey: "u326tWfIcQO03GLU8TGaGqfZQ",
      consumerSecret: "dpM91VErbxjO98JDF8SUjnmcVe6EDFLIgyK89FJyZwed9pXEWL",
      callbackURL: "http://localhost:4000/auth/twitter/callback",
    },

    //method to save the profile to local storage
    function (token, tokenSecret, profile, cb) {
      process.nextTick(function () {
        return cb(null, profile);
      });
    }
  )
);

//End point for twitter authentication
app.get("/auth/twitter", passport.authenticate("twitter"));

//success and failure redirection
app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/auth/twitter/callback");
  }
);

//Listening to port
app.listen(process.env.port || 4000, function () {
  // process.env.port useful when host this app
  console.log("now listening for requests");
});
