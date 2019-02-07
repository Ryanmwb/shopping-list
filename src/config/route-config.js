module.exports = {
    init(app){
        const userRoutes = require("../routes/userRoutes");
        const groupRoutes = require("../routes/groupRoutes");
        const listRoutes = require("../routes/listRoutes");
        const itemRoutes = require("../routes/itemRoutes");
        
        app.use(userRoutes);
        app.use(groupRoutes);
        app.use(listRoutes);
        app.use(itemRoutes);
    }
}

/*app.use(itemRoutes);
        app.use(messageRoutes);*/

        /*const itemRoutes = require("../routes/itemRoutes");
        const messageRoutes = require("../routes/messageRoutes");*/