const router = require("express").Router();
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require("passport");



//route of the spotify


if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
}

passport.use(
    new SpotifyStrategy(
        {
            clientID: 'b687bf4d6f9a4ab08264710cedf73605',
            clientSecret: 'd15f0ed534e541bc9f80bfc7ce321768',
            callbackURL: 'http://localhost:4000/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {

           // User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
           //     return done(err, user);
           //  });
            console.log(accessToken);
            localStorage.setItem("spotifytoken", accessToken);
            return done(null,accessToken);


        }
    )
);

//router.get('/auth/spotify', passport.authenticate('spotify'));
router.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
        scope: ['user-read-email', 'user-read-private', 'playlist-modify-public' , 'playlist-read-private', 'playlist-modify-private'],
        showDialog: true
    })
);

router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: 'http://localhost:3000/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        // http://localhost:4000/spotify/callback
        res.redirect('http://localhost:3000/spotify');
    }
);

router.get("/gettoken", function (req, res) {
    //console.log("get token called" + localStorage.getItem("token"));
    const token = localStorage.getItem("spotifytoken");
    res.send(token);
});






module.exports = router;
