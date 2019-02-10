const Member = require("./models").Member;
const User = require("./models").User;

module.exports = {
    createMember(member, callback){
        Member.create({
            groupId: member.groupId,
            userId: member.userId
        })
        .then((member) => {
            callback(null, member)
        })
        .catch((err) => {
            callback(null)
        })
    },
    addMemberFromCell(groupId, cell, callback){
        User.findOne({
            where: {
                phoneNumber: cell
            }
        })
        .then((user) => {
            if(!user){
                return callback("User doesn't exist with that number")
            }
            Member.findOne({
                where: {
                    userId: user.id,
                    groupId: groupId
                }
            })
            .then((existingMember) => {
                if(existingMember){
                    return callback("User is already a member of this group.")
                }
                Member.create({
                    groupId: groupId,
                    userId: user.id
                })
                .then(() => {
                    callback(null)
                })
                .catch((err)=> {
                    return callback(err)
                })
            })
        })
    },
    deleteMember(groupId, userId, callback){
        return Member.findOne({
            where:{
                userId: userId,
                groupId: groupId
            }
        })
        .then((member) => {
            member.destroy()
            .then(() => {
                callback(null)
            })
            .catch((err)=>{
                callback(err)
            })
        })
    }
}

