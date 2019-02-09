const Message = require("./models").Message;

module.exports = {
    createMessage(newMessage, callback){
        Message.create({
            userId: newMessage.userId,
            username: newMessage.username,
            groupId: newMessage.groupId,
            text: newMessage.text
        })
        .then(() => {
            callback(null)
        })
        .catch((err) => {
            callback(err)
        })
    }
}