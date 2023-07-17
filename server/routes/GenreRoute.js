const express = require("express");
const router = express.Router();

router.post("/add-genre", checkAdmin, addGenre);
router.get("/all-genre", checkAdmin, getAllGenre);
router.put("/update-genre",checkAdmin, updateGenre);
router.delete("/delete-genre", checkAdmin, deleteGenre);

module.exports = router;