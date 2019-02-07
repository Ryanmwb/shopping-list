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
                res.render("group/index", {groups});
            }
        })
    },
    show(req, res, next){
        groupQueries.findGroupAndLists(req.params.groupId, (err, group, lists) => {
            if(err){
                console.log(err)
                req.flash("error", err);
                res.redirect("/groups");
            } else {
                res.render("group/show", {group, lists})
            }
        })
    },
    editForm(req, res, next){
        groupQueries.findGroup(req.params.groupId, (err, group) => {
            if(err){
                console.log(err)
                req.flash("error", err);
                res.redirect(`/groups/${group.id}/show`);
            } else {
                res.render("group/edit", {group})
            }
        })
    },
    update(req, res, next){
        var newGroup = {
            name: req.body.groupName
        }
        groupQueries.update(req.params.groupId, newGroup, (err, group) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect("/")
            } else {
                req.flash("notice", "Group has been updated!");
                res.redirect(`/groups/${group.id}/show`);
            }
        })
    }
}