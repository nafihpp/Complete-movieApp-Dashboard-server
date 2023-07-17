const express = require("express");
const router = express.Router();

router.post("/add-movie", checkAdmin, addMovie);
router.put("/update-movie", checkAdmin, updateMovie);
router.delete("/delete-movie", checkAdmin, deleteMovie);

module.exports = router;