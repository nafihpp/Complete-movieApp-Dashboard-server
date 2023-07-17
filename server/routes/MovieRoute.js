const express = require("express");
const router = express.Router();

router.get("/all-movies", allMovies);
router.get("/search-movie",searchMovie);
router.get("/watch-later", checkAuth, watchLater);
router.post("/add-watch", checkAuth, addWatchLater);
router.delete("/watch-remove", checkAuth, removeWatchLater);

module.exports = router;