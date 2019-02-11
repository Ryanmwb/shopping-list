const Group = require("./models").Group;
const List = require("./models").List;
const Message = require("./models").Message;
const Member = require("./models").Member;
// const User = require("./models").User;

module.exports = {
    findGroupsThroughMember(user, callback){
        Member.findAll({
            where: {
                userId: user.id
            },
            include: [{
                model: Group
            }]
        })
        .then((members)=> {
            callback(null, members)
        })
        .catch((err) => {
            callback(err)
        })
    },
    createGroupAndMember(group, member, callback){
        return Group.create({
            name: group.name,
            numberOfMembers: 1
        })
        .then((group) => {
            return Member.create({
                userId: member.userId,
                groupId: group.id,
                username: member.username
            })
            .then(() => {
                callback(null);
            })
            .catch((err) => {
                callback(err)
            })
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