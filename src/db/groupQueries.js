const Group = require("./models").Group;

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
    }
}