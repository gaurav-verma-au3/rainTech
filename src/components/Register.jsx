import React, { useState } from "react";
import { registerApiReq } from "../requests";
import NotificationManager from "react-notifications/lib/NotificationManager";
const Register = ({ setFormName, formName }) => {
  const [error, setError] = useState(null);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <form
        style={{
          maxWidth: "500px",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
        onSubmit={(e) =>
          registerApiReq(NotificationManager, e, setError, setFormName)
        }
        className="p-5 text-light rounded"
      >
        <h3>Register</h3>
        <hr />

        <div className="form-group">
          <label>Email address</label>
          <input
            style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
            name="email"
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
            name="password"
            type="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Re-enter Password</label>
          <input
            style={{ backgroundColor: "#333", outline: "0", border: "0px" }}
            name="password2"
            type="password"
            className="form-control"
          />
        </div>
        {error ? (
          <div className="form-group">
            <small
              className=" text-center m-0 my-5 w-100"
              style={{ color: "#e50914" }}
            >
              {error}
            </small>
          </div>
        ) : null}
        <button
          type="submit"
          className="w-100 btn my-3 "
          style={{ backgroundColor: "rgb(229, 9, 20)" }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
