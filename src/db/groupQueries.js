const Group = require("./models").Group;
const List = require("./models").List;
const Message = require("./models").Message;

module.exports = {
    createGroup(req, callback){
        return Group.create({
            userId: req.user.id,
            name: req.body.groupName
        })
        .then((group) => {
            callback(null, group);
        })
        .catch((err) => {
            callback(err)
        })
    },
    findGroupsIOwn(user, callback){
        return Group.findAll({
            where: {userId: user.id}
        })
        .then((groups) => {
            callback(null, groups)
        })
        .catch((err) => {
            callback(err)
        })
    },
    findGroup(id, callback){
        return Group.findById(id)
        .then((group) => {
            callback(null, group)
        })
        .catch((err) => {
            callback(err)
        })
    },
    update(id, newGroup, callback){
        return Group.findById(id)
        .then((group) => {
            group.update({
                name: newGroup.name
            })
            .then((updatedGroup) => {
                callback(null, updatedGroup);
            })
            .catch((err) => {
                callback(err)
            })
        })
    },
    findGroupListsAndMessages(groupId, callback){
        return Group.findById(groupId)
        .then((group) => {
            List.findAll({
                where: {groupId: group.id}
            })
            .then((lists) => {
                Message.findAll({
                    where: {groupId: group.id}
                })
                .then((messages) => {
                    callback(null, group, lists, messages)
                })
                .catch((err) => {
                    callback(err)
                })
            })
        })
    }
}