const itemQueries = require("../db/itemQueries");

module.exports = {
    create(req, res, next){
        var groupId = req.params.groupId;
        var listId = req.params.listId;
        var newItem = {
            name: req.params.itemName,
            price: req.params.itemPrice,
            notes: req.params.itemNote,
            listId: listId
        }

        itemQueries.createItem(newItem, (err, item) => {
            if(err){
                console.log(err);
                req.flash("error", err);
                res.redirect(`/groups/${groupId}/lists/${listId}/show`);
            } else {
                req.flash("notice", "Item was added to list!")
                res.redirect(`/groups/${groupId}/lists/${listId}/show`);
            }
        })
    }
}