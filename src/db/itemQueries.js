const Item = require("./models").Item;

module.exports = {
    createItem(newItem, userId, callback){
        return Item.create({
            name: newItem.name,
            notes: newItem.notes,
            listId: newItem.listId,
            userId: userId
        })
        .then((item) => {
            callback(null, item)
        })
        .catch((err) => {
            callback(err)
        })
    },
    deleteItem(itemId, callback){
        return Item.findById(itemId)
        .then((item) => {
            item.destroy()
            .then(() =>{
                callback(null)
            })
            .catch((err) => {
                callback(err)
            })
        })
    }
}