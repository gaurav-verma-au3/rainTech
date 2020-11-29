const {
    getAllMovies,
    updateMovie,
    addMovie,
    deleteMovie,
  } = require("../controllers/movieController"),
  express = require("express"),
  router = express.Router();

router.get("/movies", getAllMovies);
router.put("/movie/update", updateMovie);
router.post("/movie/add", addMovie);
router.delete("/movie/delete/:_id", deleteMovie);

module.exports = router;
