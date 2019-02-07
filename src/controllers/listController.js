const listQueries = require("../db/listQueries");

module.exports = {
    new(req, res, next){
        res.render("list/new");
    }
}