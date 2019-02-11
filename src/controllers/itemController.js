const itemQueries = require("../db/itemQueries");

module.exports = {
    create(req, res, next){
        var groupId = req.params.groupId;
        var listId = req.params.listId;
        var newItem = {
            name: req.body.itemName,
            price: req.body.itemPrice, //removed notes as an attribute
            listId: listId
        }

        console.log("item is.....")
        console.log(newItem)

        itemQueries.createItem(newItem, req.user.id, (err, item) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${groupId}/lists/${listId}/show`);
            } else {
                req.flash("notice", "Item was added to list!")
                res.redirect(`/groups/${groupId}/lists/${listId}/show`);
            }
        })
    },
    delete(req, res, next){
        var groupId = req.params.groupId;
        var listId = req.params.listId;
        
        itemQueries.deleteItem(req.params.itemId, (err) =>{
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${groupId}/lists/${listId}/show`);
            } else {
                req.flash("notice", "Shopping item was deleted.");
                res.redirect(`/groups/${groupId}/lists/${listId}/show`);
            }
        })
    }
}