const Item = require("./models").Item;

module.exports = {
    createItem(newItem, callback){
        return Item.create({
            name: newItem.name,
            price: newItem.price,
            notes: newItem.price,
            listId: newItem.price
        })
        .then((item) => {
            callback(null, item)
        })
        .catch((err) => {
            callback(err)
        })
    }
}