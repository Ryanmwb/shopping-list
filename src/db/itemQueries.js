const Item = require("./models").Item;

module.exports = {
    createItem(newItem, userId, username, callback){
        return Item.create({
            name: newItem.name,
            listId: newItem.listId,
            userId: userId,
            price: newItem.price,
            username: username
        })
        .then((item) => {
            callback(null)
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