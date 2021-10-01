const router = require("express").Router();
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require("passport");
const axios = require('axios');



passport.use(
    new SpotifyStrategy(
        {
            clientID: '649ac4149cdb4b0ea550b1ad265b5d0e',
            clientSecret: 'd4603fdcbedb48a19de24c386cae9b0a',
            callbackURL: 'https://localhost/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
                return done(err, user);
            });
        }
    )
)

router.get('/auth/spotify', passport.authenticate('spotify'));

router.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);




module.exports = router;
