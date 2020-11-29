import React from "react";

const Header = ({ user, setUser }) => {
  return (
    <div
      className="bg-dark text-white d-flex align-items-center justify-content-between px-3 fixed-top"
      style={{ height: "10vh" }}
    >
      <h5 className="m-0 p-0">Rain Tech Assignment</h5>
      {user ? (
        <button
          className="btn btn-sm rounded-0 btn-danger"
          onClick={(e) => {
            localStorage.removeItem("raintechUser");
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Header;
