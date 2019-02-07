const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");
const validation = require("./validation");

router.get("/groups", groupController.myGroups);
router.get("/groups/new", groupController.new);
router.post("/groups/create", validation.validateCreateGroup, groupController.create);
router.get("/groups/:id/show", groupController.show);
router.get("/groups/:id/edit_form", groupController.editForm);
router.post("/groups/:id/edit", groupController.edit)

module.exports = router;