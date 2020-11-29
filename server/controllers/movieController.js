const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    const u = await Movie.find();
    if (u.length) {
      return res.json({
        success: true,
        data: u,
      });
    } else {
      return res.json({
        success: false,
        message: "No movies to show",
      });
    }
  } catch (error) {
    console.log("Error with getting movies: ", error);
    return res.json({
      success: false,
      message: "Unable to get movies",
    });
  }
};

const updateMovie = async (req, res) => {
  const { _id, title, poster, description, year, runtime } = req.body;
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id },
      { $set: { title, poster, description, year, runtime } },
      { new: true }
    );
    console.log(updatedMovie);
    return res.json({
      success: true,
      data: updatedMovie,
    });
  } catch (error) {
    console.log("Error with updating movie : ", error);
    return res.json({
      success: false,
      message:
        "Sorry, Error with updating movie details . We are looking into it please try after some time.",
    });
  }
};

const addMovie = async (req, res) => {
  const { title, poster, description, year, runtime } = req.body;
  try {
    const addedMovie = await Movie.create({
      title,
      poster,
      description,
      year,
      runtime,
    });
    console.log(addedMovie);
    return res.json({
      success: true,
      data: addedMovie,
    });
  } catch (error) {
    console.log("Error with adding movie : ", error);
    return res.json({
      success: false,
      message:
        "Sorry, Error with adding movie . We are looking into it please try after some time.",
    });
  }
};
const deleteMovie = async (req, res) => {
  const { _id } = req.params;
  try {
    await Movie.findOneAndDelete({
      _id,
    });
    return res.json({
      success: true,
      message: "Movie Deleted successfully",
    });
  } catch (error) {
    console.log("Error with deleting movie : ", error);
    return res.json({
      success: false,
      message:
        "Sorry, Error with deleting movie . We are looking into it please try after some time.",
    });
  }
};

module.exports = {
  getAllMovies,
  updateMovie,
  addMovie,
  deleteMovie,
};
