const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");
const validation = require("./validation");

router.get("/groups/new", groupController.new);
router.post("/groups/create", validation.validateCreateGroup, groupController.create);
router.get("/groups/:groupId/show", groupController.show);
router.get("/groups/:groupId/edit_form", groupController.editForm);
router.post("/groups/:groupId/update", groupController.update);

module.exports = router;