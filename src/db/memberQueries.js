const Member = require("./models").Member;

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
    }
}