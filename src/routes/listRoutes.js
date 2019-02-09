const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const validation = require("./validation");

router.get("/groups/:groupId/:groupName/lists/new", listController.new);
router.post("/groups/:groupId/:groupName/lists/create", validation.validateCreateList, listController.create);
router.get("/groups/:groupId/lists/:listId/show", listController.show);
router.get("/groups/:groupId/lists/:listId/edit_form", listController.editForm);
router.post("/groups/:groupId/lists/:listId/update", listController.update);

module.exports = router;