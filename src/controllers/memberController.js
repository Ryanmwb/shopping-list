const memberQueries = require("../db/memberQueries");

module.exports = {
    new(req, res, next){
        var groupId = req.params.groupId;

        res.render("member/new", {groupId});
    },
    add(req, res, next){
        var groupId = req.params.groupId;
        var cell = req.body.cellNumber;

        console.log("cell is....")
        console.log(cell)

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

    }
}