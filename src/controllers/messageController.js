const messageQueries = require("../db/messageQueries");

module.exports = {
    create(req, res, next){
        var groupId = req.params.groupId;
        var newMessage = {
            userId: req.user.id,
            username: req.user.username,
            groupId: req.params.groupId,
            text: req.body.text
        }
        messageQueries.createMessage(newMessage, (err) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${groupId}/show`)
            } else {
                res.redirect(`/groups/${groupId}/show`)
            }
        })
    }
}