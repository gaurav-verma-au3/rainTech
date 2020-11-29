import React, { useEffect, useState } from "react";
import EditForm from "../components/EditForm";
import MovieTiles from "../components/MovieTiles";
import { getMovies } from "../requests";
import NotificationsManager from "react-notifications/lib/NotificationManager";
const Home = () => {
  const [purpose, setPurpose] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getMovies(NotificationsManager, setError, setMovies);
  }, []);

  return (
    <div className="container-fluid">
      {purpose && movieData ? (
        <EditForm
          purpose={purpose}
          setMovies={setMovies}
          movies={movies}
          setPurpose={setPurpose}
          movieData={movieData}
          setMovieData={setMovieData}
        />
      ) : null}
      <div className="row">
        <div className="col-12 my-2 d-flex justify-content-end">
          <button
            className="btn btn-sm btn-primary rounded-0"
            onClick={(e) => {
              setMovieData({
                title: "",
                year: "",
                runtime: "",
                description: "",
                poster: "",
              });
              setPurpose("add");
            }}
          >
            ADD
          </button>
        </div>
        {movies ? (
          movies.map((m) => (
            <MovieTiles
              key={m._id}
              setMovies={setMovies}
              setPurpose={setPurpose}
              movies={movies}
              movieData={movieData}
              setMovieData={setMovieData}
              movie={m}
            />
          ))
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ width: "100vh" }}
          >
            <div className="spinner-border my-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
