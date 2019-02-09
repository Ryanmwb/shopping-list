const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const validation = require("./validation");

router.post("/groups/:groupId/messages/create", validation.validateCreateMessage, messageController.create)

module.exports = router;