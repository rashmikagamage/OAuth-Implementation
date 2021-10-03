const router = require("express").Router();
const passport = require("passport");

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: '98f714fa698e7c4a79fc',
    clientSecret: '37935139ca6e1d99c8616da7dc049feb00dd17c1 ',
    callbackURL: "http://localhost:4000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    localStorage.setItem("googletoken", accessToken);
    return done(null, accessToken);
  }
));


router.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'google-maps'] }
));

//callback url
router.get( '/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000/googleMap',
        failureRedirect: 'http://localhost:3000/login'
}));


router.get("/gettoken", function (req, res) {
    const token = localStorage.getItem("googletoken");
    res.send(token);
  });







module.exports = router;