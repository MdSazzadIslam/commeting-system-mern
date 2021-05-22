const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const verifyToken = require("../middleware/verifyToken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const dir = "./images";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, "./images");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),

  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(/*res.end('Only images are allowed')*/ null, false);
    }
    callback(null, true);
  },
});

router.get("/", verifyToken, postController.getAll);
router.get("/:id", verifyToken, postController.getById);
router.get("/ld/sum", verifyToken, postController.getSumLD);

router.post(
  "/create",
  verifyToken,
  upload.single("image"),
  postController.createPost
);
router.delete("/delete/:id", verifyToken, postController.deletePost);
router.put("/update/:id", verifyToken, postController.updatePost);
router.post("/updateLike", verifyToken, postController.updateLike);
router.post("/updateDisLike", verifyToken, postController.updateDisLike);

module.exports = router;
