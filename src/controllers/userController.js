const userQueries = require("../db/userQueries")
const passport = require("passport")

module.exports = {
    signUp(req, res, next){
        res.render("user/signUp")
    },
    create(req, res, next){
        var newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }
        userQueries.createUser(newUser, (err, user) => {
            if(err){
                console.log(err)
                req.flash("error", err)
                res.redirect("/sign_up")
            } else {
                req.flash("notice", "You've successfully signed up!")
                res.redirect("/")
            }
        })
    },
    signIn(req, res, next){
        passport.authenticate("local")(req, res, function(){
            if(!req.user){
                req.flash("notice", "Sign in failed. Please try again.")
                res.redirect("/sign_in");
            } else {
                req.flash("notice", "You've successfully signed in!");
                res.redirect("/");
            }
        })
    },
    signInForm(req, res, next){
        res.render("user/signIn")
    }
}