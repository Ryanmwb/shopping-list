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
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
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
                res.redirect("/sign_in_form");
                req.flash("notice", "Sign in failed. Please try again.")
            } else {
                req.flash("notice", "You've successfully signed in!");
                res.redirect("/");
            }
        })
    },
    signInForm(req, res, next){
        res.render("user/signIn")
    },
    signOut(req, res, next){
        req.logout();
        req.flash("Notice", "You've successfully logged out.");
        res.redirect("/")
    }
}

/*
For showing messages

var currentOffset = 0;
var pageSize = 10;

function getMessages() {
    return Message.findAll({
        offset: currentOffset,
        limit: pageSize
    });
};

// ON PAGE LOAD
getMessages();

var loadMore = document.querySelector('#loadMore');
loadMore.addEventListener('click', () => {
    currentOffset += pageSize;
    getMessages();
});

*/