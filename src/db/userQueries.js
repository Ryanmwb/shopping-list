const User = require("./models").User;
const bcrypt = require("bcryptjs");

module.exports = {
    createUser(newUser, callback){
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(newUser.password, salt);

        return User.create({
            username: newUser.username,
            email: newUser.email,
            password: hashedPassword,
            phoneNumber: newUser.phoneNumber
        })
        .then((user) => {
            callback(null, user)
        })
        .catch((err) => {
            callback(err)
        })
    },
    deleteUser(userId, callback){
        return User.findById(userId)
        .then((user) => {
            user.destroy()
            .then(()=> {
                callback(null)
            })
            .catch((err) => {
                callback(err)
            })
        })
    },
    updateUser(userEdit, callback){
        return User.findById(userEdit.id)
        .then((user) => {
            user.update({
                username: userEdit.username,
                email: userEdit.email,
                notifications: userEdit.notifications,
                phoneNumber: userEdit.phoneNumber
            })
            .then(() => {
                callback(null)
            })
            .catch((err) => {
                callback(err)
            })
        })
    }
}