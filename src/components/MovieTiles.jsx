import React from "react";
import { deleteMovie } from "../requests";
import NotificationManager from "react-notifications/lib/NotificationManager";
const MovieTiles = ({ movie, setPurpose, setMovieData, setMovies, movies }) => {
  return (
    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 my-2 mx-auto  border border-sm shadow shadow-sm">
      <div className="row h-100">
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12 d-flex justify-content-center align-items-center">
          <img className="w-100" src={movie.poster} alt={movie.title} />
        </div>
        <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12 my-2">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <h4 className="mr-3 m-0">{movie.title}</h4>
              <h6 className="mr-3 m-0">({movie.year})</h6>
            </div>
            <p>{movie.runtime}</p>
            <p className="text-justify">{movie.description}</p>
          </div>
          <div className="row">
            <div className="col-6 mt-2">
              <button
                className="btn btn-warning w-100 rounded-0"
                onClick={(e) => {
                  setPurpose("edit");
                  setMovieData({ ...movie });
                }}
              >
                Edit
              </button>
            </div>
            <div className="col-6 mt-2">
              <button
                className="btn btn-danger w-100  rounded-0"
                onClick={(e) =>
                  deleteMovie(
                    NotificationManager,
                    e,
                    setMovies,
                    movies,
                    movie._id
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTiles;
