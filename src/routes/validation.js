module.exports = {
    validateUsers(req, res, next) {
        if(req.method === "POST") {
          req.checkBody("email", "must be valid").isEmail();
          req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6})
          req.checkBody("passwordConfirmation", "must match password provided")/*.optional()*/.matches(req.body.password);
        }
        
        const errors = req.validationErrors();
   
        if (errors) {
          req.flash("error", errors);
          return res.redirect(req.headers.referer);
        } else {
          return next();
        }
    },
    validateSignIn(req, res, next) {
        if(req.method === "POST") {
          req.checkBody("email", "must be valid").isEmail();
          req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6})
        }
   
        const errors = req.validationErrors();
   
        if (errors) {
          req.flash("error", errors);
          return res.redirect(req.headers.referer);
        } else {
          return next();
        }
    },
    validateCreateGroup(req, res, next){
        if(req.method === "POST"){
          req.checkBody("groupName", "must be at least one character").isLength({min: 1})
        }

        const errors = req.validationErrors();
   
        if (errors) {
          req.flash("error", errors);
          return res.redirect(req.headers.referer);
        } else {
          return next();
        }
    },
    validateCreateList(req, res, next){
      if(req.method === "POST"){
        req.checkBody("listName", "must be at least one character").isLength({min: 1})
      }

      const errors = req.validationErrors();
 
      if (errors) {
        req.flash("error", errors);
        return res.redirect(req.headers.referer);
      } else {
        return next();
      }
  }
}