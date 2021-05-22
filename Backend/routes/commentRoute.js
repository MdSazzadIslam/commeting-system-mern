const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, commentController.getAll);
router.get("/:uId/:cId", verifyToken, commentController.getById);
router.post("/create", verifyToken, commentController.createComment);
router.delete("/delete", verifyToken, commentController.deleteComment);
router.put("/update/:uId/:cId", verifyToken, commentController.updateComment);
module.exports = router;
