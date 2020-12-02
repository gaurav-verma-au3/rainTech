import React, { useEffect, useState } from "react";
import EditForm from "../components/EditForm";
import MovieTiles from "../components/MovieTiles";
import { getMovies } from "../requests";
import NotificationsManager from "react-notifications/lib/NotificationManager";
const Home = ({ purpose, setPurpose, setMovieData, movieData }) => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getMovies(NotificationsManager, setError, setMovies);
  }, []);

  return (
    <div
      className="container-fluid pt-4 "
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
    >
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
        {movies ? (
          movies.map((m) => (
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 d-flex justify-content-center mb-4">
              <MovieTiles
                key={m._id}
                setMovies={setMovies}
                setPurpose={setPurpose}
                movies={movies}
                movieData={movieData}
                setMovieData={setMovieData}
                movie={m}
              />
            </div>
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
