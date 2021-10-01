const app = express();
const express = require("express");

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
require("dotenv").config();

//middle wares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: "SECRET" }));

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
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
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
  function (req, res) {}
);

//callback point
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.FAILURE_REDIRECT,
  }),
  function (req, res) {
    res.redirect(process.env.GITHUB_SUCCESS);
  }
);

//Strategy for Twitter
passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CLIENT_ID,
      consumerSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL,
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
  passport.authenticate("twitter", {
    failureRedirect: process.env.FAILURE_REDIRECT,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.TWITTER_SUCCESS);
  }
);

//Listening to port
app.listen(process.env.PORT, function () {
  // process.env.port useful when host this app
  console.log("now listening for requests");
});
