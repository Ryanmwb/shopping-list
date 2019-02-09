const listQueries = require("../db/listQueries");
const groupQueries = require("../db/groupQueries");

module.exports = {
    new(req, res, next){
        var groupId = req.params.groupId
        var groupName = req.params.groupName
        res.render("list/new", {groupId, groupName});
    },
    create(req, res, next){
        var newList = {
            name: req.body.listName,
            description: req.body.listDescription,
            groupName: req.params.groupName
        }
        var groupId = req.params.groupId
        listQueries.createList(newList, groupId, (err, list) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${req.params.groupId}/show`);
            } else {
                req.flash("notice", "New list was created!");
                res.redirect(`/groups/${req.params.groupId}/lists/${list.id}/show`)
            }
        })
    },
    show(req, res, next){
        var groupId = req.params.groupId;
        var listId = req.params.listId;

        listQueries.findListAndItems(listId, (err, list, items) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${req.params.groupId}/show`);
            } else {
                res.render("list/show", {list, groupId, items})
            }
        })
    }, 
    editForm(req, res, next){
        var groupId = req.params.groupId;

        listQueries.findList(req.params.listId, (err, list) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${req.params.groupId}/show`);
            } else {
                res.render("list/edit", {list, groupId})
            }
        })
    },
    update(req, res, next){
        var newList = {
            name: req.body.listName,
            groupId: req.params.groupId,
            description: req.body.listDescription
        }
        listQueries.update(req.params.listId, newList, (err, list) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${list.groupId}/lists/${list.id}/show`);
            } else {
                req.flash("notice", "List has been updated!")
                res.redirect(`/groups/${list.groupId}/lists/${list.id}/show`);
            }
        })
    }
}