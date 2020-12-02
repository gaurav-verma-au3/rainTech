import React from "react";
import { deleteMovie } from "../requests";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { MdEdit, MdDelete } from "react-icons/md";
const MovieTiles = ({ movie, setPurpose, setMovieData, setMovies, movies }) => {
  return (
    <div
      className="w-75 text-light rounded"
      style={{ backgroundColor: "rgba(0,0,0,0.8)", overflow: "hidden" }}
    >
      <img className="w-100" src={movie.poster} alt={movie.title} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="title">{movie.title}</p>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <p className="year">{movie.year}</p>
            <p className="runtime">{movie.runtime}</p>
          </div>
          <div className="col-12">
            <p className="description">{movie.description.slice(0, 300)}...</p>
          </div>
          <div className="col-12 d-flex justify-content-end my-3">
            <MdEdit
              style={{
                color: "#e50914",
                fontSize: "1.5rem",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                setPurpose("edit");
                setMovieData({ ...movie });
              }}
            />
            <MdDelete
              onClick={(e) =>
                deleteMovie(
                  NotificationManager,
                  e,
                  setMovies,
                  movies,
                  movie._id
                )
              }
              style={{
                color: "#e50914",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 my-2 mx-auto  border border-sm shadow shadow-sm">
    //   <div className="row h-100">
    //     <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12 d-flex justify-content-center align-items-center">
    //       <img className="w-100" src={movie.poster} alt={movie.title} />
    //     </div>
    //     <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12 my-2">
    //       <div className="col-12">
    //         <div className="d-flex align-items-center">
    //           <h4 className="mr-3 m-0">{movie.title}</h4>
    //           <h6 className="mr-3 m-0">({movie.year})</h6>
    //         </div>
    //         <p>{movie.runtime}</p>
    //         <p className="text-justify">{movie.description}</p>
    //       </div>
    //       <div className="row">
    //         <div className="col-6 mt-2">
    //           <button
    //             className="btn btn-warning w-100 rounded-0"
    //             onClick={(e) => {
    //               setPurpose("edit");
    //               setMovieData({ ...movie });
    //             }}
    //           >
    //             Edit
    //           </button>
    //         </div>
    //         <div className="col-6 mt-2">
    //           <button
    //             className="btn btn-danger w-100  rounded-0"
    //             onClick={(e) =>
    //               deleteMovie(
    //                 NotificationManager,
    //                 e,
    //                 setMovies,
    //                 movies,
    //                 movie._id
    //               )
    //             }
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MovieTiles;
