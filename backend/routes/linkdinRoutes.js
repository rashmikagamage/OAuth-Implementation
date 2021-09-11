const router = require("express").Router();
var LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");
const axios = require('axios');

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

passport.use(
  new LinkedInStrategy(
    {
      clientID: "78mcstspciczxg",
      clientSecret: "qzErk4qSOPcZaji4",
      callbackURL: "http://localhost:4000/api/linkdin/callback",
      scope: ["r_emailaddress", "r_liteprofile", "w_member_social"],
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        //console.log("accessToken", accessToken);

        localStorage.setItem("token", accessToken);
        //console.log(localStorage.getItem("token"));
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", { state: "SOME STATE" }),
  function (req, res) {
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  }
);

router.get(
  "/linkdin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/linkdinHome",
    failureRedirect: "http://localhost:3000/login",
  })
);

router.get("/gettoken", function (req, res) {
  //console.log("get token called" + localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  res.send(token);
});


router.get("/getprofile", function (req, res) {
  //console.log("get token called" + localStorage.getItem("myFirstKey"));

  // const token = 'AQXr4PCQoszLznYCzJ7WuPu-wmkmt1yhGEK_gs8vkbr6WiyPcuuNiUsk7VVyMSJeJwF7Xxy7BvjXp3J1A505i_fF8_q16LKwOFh8Dnbz8a2mHEL0oIqweG1-GQzJ4YzdtEAiolDt-Pa1rMRxKoNIY882N6gqMfT-FhC-QNijDObxp-ZisIGfxKoe_ZuuJqXXV_dlsIF0eSRsIIASmxfUKcpU7VaX80jORM4Z3O6iFYE48G3YKzvgpjx9a4P6dVGinXwPrT1L6D7Ak66kLtGRDRcD1JpCbc_2Ol2qRQesJn4wwcPbq317aKA6cGjeuP-d07pyL5o7KvoMoKaNfxJT_ovXkhOQIQ'
  const token = localStorage.getItem("myFirstKey");
  axios({
      method: 'get',
      url: 'https://api.linkedin.com/v2/me',
      headers: { Authorization: `Bearer ${token}`}
    })
      .then(function (response) {
        //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log(response.data)
        res.send(response.data);
      });

     
});

module.exports = router;
