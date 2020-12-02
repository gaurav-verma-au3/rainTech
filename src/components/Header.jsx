import React from "react";

const Header = ({ user, setUser, formName, setFormName, setMovieData,setPurpose }) => {
  return (
    <div
      className=" container-fluid text-white d-flex align-items-center justify-content-between px-3 fixed-top"
      style={{
        height: "10vh",
        backgroundColor: user ? "black" : "transparent",
      }}
    >
      <div className="row w-100">
        <div className="col-3 d-flex align-items-center justify-content-between">
          <img
            onClick={(e) => setFormName("")}
            style={{ width: "130px", cursor: "pointer" }}
            src="https://res.cloudinary.com/degnified/image/upload/v1606918238/580b57fcd9996e24bc43c529_tjon4f.png"
            alt=""
          />
        </div>
        <div className="col-9 d-flex align-items-center justify-content-end">
          {user ? (
            <>
              <button
                className="btn btn-sm btn-primary mr-2 rounded-0"
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
              <button
                className="btn btn-sm rounded-0 btn-danger"
                onClick={(e) => {
                  localStorage.removeItem("raintechUser");
                  setUser(null);
                }}
              >
                Logout
              </button>
            </>
          ) : formName === "login" ? (
            <button
              onClick={(e) => setFormName("register")}
              className="btn btn-sm"
              style={{ backgroundColor: "#e50914" }}
            >
              Register
            </button>
          ) : (
            <button
              onClick={(e) => setFormName("login")}
              className="btn btn-sm"
              style={{ backgroundColor: "#e50914" }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
