import React, { useState } from "react";
import { loginApiReq } from "../requests";
import NotificationManager from "react-notifications/lib/NotificationManager";
const Login = ({ setFormName, formName, setUser }) => {
  const [error, setError] = useState(null);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <form
        onSubmit={(e) => loginApiReq(NotificationManager, e, setError, setUser)}
        className="p-4 border border-sm rounded shadow shadow-sm"
      >
        <h3>Login</h3>
        <hr />
        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        {error ? (
          <div className="form-group">
            <small className="text-danger text-center m-0 my-5 w-100">
              {error}
            </small>
          </div>
        ) : null}
        <button type="submit" className="w-100 rounded-0 btn btn-primary">
          Login
        </button>
        <div>
          <button
            className="btn w-100 btn-dark my-3 rounded-0"
            onClick={(e) => setFormName("register")}
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
