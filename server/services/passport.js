// passport
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
// auth variables
const keys = require("../config/index");
// mongoose
const mongoose = require("mongoose");
const User = require("../models/User");

// connect mongoose to MongoDB
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

//passport strategy setting ==============================================
//Google------------------------
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }, async (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        } else {
          const user = await new User({ googleId: profile.id }).save();
          return done(null, user);
        }
      });
    }
  )
);

//Local------------------------
// Local-SignUp
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: "username",
      passwordField: "password"
    },
    function(req, username, password, done) {
      User.findOne({ username: username }, async (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, {
            message: "This username is already taken. Try different one."
          });
        } else {
          const user = await new User({
            username: username,
            password: password
          }).save();
          return done(null, user);
        }
      });
    }
  )
);

//Local-login
passport.use(
  "local-login",
  new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: "username",
      passwordField: "password"
    },
    function(req, username, password, done) {
      User.findOne({ username: username, password: password }, function(
        err,
        user
      ) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: "Your username or password are not correct."
          });
        }
      });
    }
  )
);
