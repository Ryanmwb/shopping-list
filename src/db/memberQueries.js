const Member = require("./models").Member;
const Group = require("./models").Group;
const User = require("./models").User;

module.exports = {
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
                    userId: user.id,
                    username: user.username
                })
                .then(() => {
                    Group.findById(groupId)
                    .then((group) => {
                        Member.findAll({
                            where: {groupId: groupId}
                        })
                        .then((members) => {
                            group.update({
                                numberOfMembers: members.length
                            })
                            .then(() => {
                                callback(null)
                            })
                            .catch((err)=> {
                                return callback(err)
                            })
                        })
                    })
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
            .then(()=> {
                Group.findById(groupId)
                .then((group) => {
                    group.update({
                        numberOfMembers: group.numberOfMembers-1
                    })
                })
            })
            /*.then(() => {
                callback(null)
            })
            .catch((err)=>{
                callback(err)
            })*/
        })
    }
}

