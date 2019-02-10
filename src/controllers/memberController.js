const memberQueries = require("../db/memberQueries");

module.exports = {
    new(req, res, next){
        var groupId = req.params.groupId;

        res.render("member/new", {groupId});
    },
    add(req, res, next){
        var groupId = req.params.groupId;
        var cell = req.body.cellNumber;

        memberQueries.addMemberFromCell(groupId, cell, (err)=>{
            if(err){
                console.log("error is.....")
                console.log(err);
                req.flash("notice", err);
                res.redirect(`/groups/${groupId}/show`);
            } else {
                req.flash("notice", "member was added!");
                res.redirect(`/groups/${groupId}/members/new`);
            }
        })

    },
    deleteMember(req, res, next){
        var groupId = req.params.groupId;
        var userId = req.user.id;

        memberQueries.deleteMember(groupId, userId, (err) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/user/${userId}`);
            } else {
                req.flash("notice", "You left the group.");
                res.redirect(`/user/${userId}/profile`);
            }
        })
    }
}