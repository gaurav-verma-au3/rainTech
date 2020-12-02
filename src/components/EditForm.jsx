import React from "react";
import { updateMovie, addMovie } from "../requests";
import NotificationManager from "react-notifications/lib/NotificationManager";
const EditForm = ({
  movieData,
  setMovieData,
  purpose,
  setPurpose,
  setMovies,
  movies,
}) => {
  const handleUpdate = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const closeForm = () => {
    setMovieData(null);
    setPurpose(null);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        right: "0",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9999",
      }}
      onClick={closeForm}
    >
      <div
        className=" text-light p-5 rounded"
        style={{
          height: "80vh",
          overflowY: "scroll",
          maxWidth: "500px",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={(e) =>
            purpose === "edit"
              ? updateMovie(
                  NotificationManager,
                  e,
                  setMovies,
                  movies,
                  movieData,
                  closeForm
                )
              : addMovie(
                  NotificationManager,
                  e,
                  setMovies,
                  movies,
                  movieData,
                  closeForm
                )
          }
        >
          <h3>{purpose === "edit" ? `Edit (${movieData.title}` : "Add"}</h3>
          <hr />
          <div className="form-group">
            <label>Title</label>
            <input
              style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
              onChange={handleUpdate}
              type="text"
              name="title"
              value={movieData.title}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
              onChange={handleUpdate}
              type="text"
              value={movieData.description}
              name="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
              type="text"
              name="year"
              onChange={handleUpdate}
              value={movieData.year}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Runtime</label>
            <input
              style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
              type="text"
              name="runtime"
              onChange={handleUpdate}
              value={movieData.runtime}
              className="form-control"
            />
            <small className="text-secondary">Hint : 2 Hrs 32 Min</small>
          </div>
          <div className="form-group">
            <label>Poster</label>
            <input
              style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
              type="text"
              name="poster"
              onChange={handleUpdate}
              value={movieData.poster}
              className="form-control"
            />
          </div>

          <button
            type="submit"
            className="w-100 btn"
            style={{ backgroundColor: "rgb(229, 9, 20)" }}
          >
            {purpose === "edit" ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
