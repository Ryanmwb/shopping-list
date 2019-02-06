module.exports = {
    init(app){
        const userRoutes = require("../routes/userRoutes")
        app.use(userRoutes)
    }
}