const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const validation = require("./validation");

router.get("/groups/:groupId/members/new", memberController.new);
router.post("/groups/:groupId/members/add", memberController.add);

module.exports = router;