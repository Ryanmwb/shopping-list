const groupQueries = require("../db/groupQueries");

module.exports = {
    new(req, res, next){
        res.render("group/new");
    },
    create(req, res, next){
        if(req.user == undefined){
            req.flash("notice", "You must be signed in to create a group.")
            return res.redirect("/groups/new")
        }

        groupQueries.createGroup(req, (err, group) => {
            if(err){
                console.log(err)
                req.flash("error", err);
                res.redirect("/groups/new")
            } else {
                req.flash("notice", "Group was created!");
                res.redirect("/groups")
            }
        })
    },
    myGroups(req, res, next){
        groupQueries.findGroupsIOwn(req.user, (err, groups) => {
            if(err){
                console.log(err)
                req.flash("error", err);
                res.redirect("/");
            } else {
                console.log("my groups are.....")
                console.log(groups);
                res.render("group/index", {groups});
            }
        })
    },
    show(req, res, next){
        groupQueries.findGroup(req.params.id, (err, group) => {
            if(err){
                console.log(err)
                req.flash("error", err);
                res.redirect("/groups");
            } else {
                res.render("group/show", {group})
            }
        })
    },
    editForm(req, res, next){
        groupQueries.findGroup(req.params.id, (err, group) => {
            if(err){
                console.log(err)
                req.flash("error", err);
                res.redirect(`/groups/${group.id}/show`);
            } else {
                res.render("group/edit", {group})
            }
        })
    }
}