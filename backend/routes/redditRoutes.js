const router = require("express").Router();
const RedditStrategy = require('passport-reddit').Strategy;
const passport = require("passport");
const axios = require('axios');

//route of the reddit
passport.use(new RedditStrategy({
        clientID: '4EXvjTaKwqbn-tr587OZLw',
        clientSecret: '_VOSE8BiDwlhEa8PgLAq3Qxvt0Z2DQ',
        callbackURL: 'http://127.0.0.1:3000/auth/reddit/callback'
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ redditId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

router.get('/auth/reddit',
    passport.authenticate('reddit'));

router.get('/auth/reddit/callback',
    passport.authenticate('reddit', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

module.exports = router;
