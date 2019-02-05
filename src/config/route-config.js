module.exports = {
    init(app){
        const test = require("../routes/test")
        app.use(test)
    }
}