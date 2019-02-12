const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const validation = require("./validation");

router.post("/groups/:groupId/lists/:listId/items/create", itemController.create);
router.post("/groups/:groupId/lists/:listId/items/:itemId/delete", itemController.delete);
router.post("/:groupId/:listId/items/:itemId/purchase", itemController.purchase);

module.exports = router;