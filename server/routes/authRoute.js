const passport = require("passport");

module.exports = app => {
  // General Route ===========================
  // Log out
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Fetch Current User Data
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  // Authenticate with Passport==============================
  // Google------------
  // send auth request to google
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  // the callback from google
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  // Local (with username and password)------------
  // local-signup
  app.post("/auth/local-signup", (req, res, next) => {
    passport.authenticate("local-signup", (error, user, message) => {
      if (error) return next(error);
      if (message) return res.send(message);
      req.logIn(user, error => {
        if (error) return next(error);
        return res.send("success");
      });
    })(req, res, next);
  });
  // local-login
  app.post("/auth/local-login", (req, res, next) => {
    passport.authenticate("local-login", (error, user, message) => {
      if (error) return next(error);
      if (message) return res.send(message);
      req.logIn(user, error => {
        if (error) return next(error);
        return res.send("success");
      });
    })(req, res, next);
  });
};
