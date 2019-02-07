const List = require("./models").List;

module.exports = {
    createList(newList, groupId, callback){
        return List.create({
            name: newList.name,
            groupId: groupId
        })
        .then((list) => {
            callback(null, list)
        })
        .catch((err) => {
            callback(err)
        })
    },
    findList(id, callback){
        return List.findById(id)
        .then((list) => {
            callback(null, list)
        })
        .catch((err) => {
            callback(err)
        })
    }, 
    update(listId, newList, callback){
        return List.findById(listId)
        .then((list) => {
            list.update({
                name: newList.name
            })
            .then((updatedList) => {
                callback(null, updatedList)
            })
            .catch((err) => {
                callback(err)
            })
        })
    }
}