const userQueries = require("../db/userQueries");

const passport = require("passport");

module.exports = {
    signUp(req, res, next){
        res.render("user/signUp")
    },
    create(req, res, next){
        var twilio = require('twilio');
        var accountSid = process.env.accountSid;
        var auth_token = process.env.auth_token;
        var client = new twilio(accountSid, auth_token)

        var newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }

        var twilioCell = "1"+newUser.phoneNumber.toString()
        userQueries.createUser(newUser, (err, user) => {
            if(err){
                console.log(err)
                req.flash("error", err)
                res.redirect("/sign_up")
            } else {
                client.messages.create({
                    body: 'Welcome to Shoppit!',
                    to: twilioCell,
                    from: '13175504888'
                })
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