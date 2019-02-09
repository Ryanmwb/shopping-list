module.exports = {
    validateUsers(req, res, next) {
        if(req.method === "POST") {
          req.checkBody("email", "must be valid").isEmail();
          req.checkBody("phoneNumber", "must be only digits and no other characters (Example -> '3175551324').").isNumeric();
          req.checkBody("phoneNumber", "must have exactly 10 digits (Example -> '3175551324').").isLength({max: 10, min: 10});
          req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6});
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
  },
  validateCreateMessage(req, res, next){
    if(req.method === "POST"){
      req.checkBody("text", "must be at least one character").isLength({min: 1})
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