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

        itemQueries.createItem(newItem, req.user.id, req.user.username, (err) => {
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
    },
    purchase(req, res, next){
        var groupId = req.params.groupId;
        var listId = req.params.listId;
        var itemId = req.params.itemId;
        console.log("item id is.....")
        console.log(itemId)

        /*itemQueries.purchaseButton(itemId, (err, item) => {
            console.log("item now is.....")
            console.log(item.purchased)
            if(err){
                console.log(err)
                req.flash("error", err)
                res.redirect(`/groups/${groupId}/lists/${listId}/show`)
            } else {
                res.redirect(`/groups/${groupId}/lists/${listId}/show`)
            }
        })*/
        itemQueries.findItem(itemId, (err, item) => {
            if(err){
                console.log(err)
                req.flash("error", err)
                res.redirect(`/groups/${groupId}/lists/${listId}/show`)
            } else {
                console.log("item returned from find it....")
                console.log(item)
                if(item.purchased == true){
                    itemQueries.purchaseNowFalse(itemId, (err, itemUpdated) => {
                        if(err){
                            console.log(err)
                            req.flash("error", err)
                            res.redirect(`/groups/${groupId}/lists/${listId}/show`)  
                        } else {
                            console.log("purchase now false was called");
                            console.log(itemUpdated);
                            res.redirect(`/groups/${groupId}/lists/${listId}/show`); 
                        }
                    })
                } else if (item.purchased == false){
                    itemQueries.purchaseNowTrue(itemId, (err, itemUpdated) => {
                        if(err){
                            console.log(err)
                            req.flash("error", err)
                            res.redirect(`/groups/${groupId}/lists/${listId}/show`)  
                        } else {
                            console.log("purchase now true was called");
                            console.log(itemUpdated)
                            res.redirect(`/groups/${groupId}/lists/${listId}/show`); 
                        }
                    })
                }
            }
        })
    }
}