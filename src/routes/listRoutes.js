const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const validation = require("./validation");

router.get("/groups/:groupId/lists/new", listController.new);

module.exports = router;