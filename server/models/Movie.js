const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  poster: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
  year: {
    type: String,
    unique: false,
    required: true,
  },
  runtime: {
    type: String,
    unique: false,
    required: true,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
