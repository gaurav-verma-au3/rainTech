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
        onSubmit={(e) =>
          registerApiReq(NotificationManager, e, setError, setFormName)
        }
        className="p-4 border border-sm rounded shadow shadow-sm"
      >
        <h3>Register</h3>
        <hr />

        <div className="form-group">
          <label>Email address</label>
          <input name="email" type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label>Re-enter Password</label>
          <input name="password2" type="password2" className="form-control" />
        </div>
        {error ? (
          <div className="form-group">
            <small className="text-danger text-center m-0 my-5 w-100">
              {error}
            </small>
          </div>
        ) : null}
        <button type="submit" className="w-100 rounded-0 btn btn-primary">
          Register
        </button>
        <div>
          <button
            className="btn w-100 btn-dark my-3 rounded-0"
            onClick={(e) => setFormName("login")}
          >
            Go to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
