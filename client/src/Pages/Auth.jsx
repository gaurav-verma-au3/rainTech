import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = ({ setUser }) => {
  const [formName, setFormName] = useState("login");
  return (
    <div>
      {formName === "login" ? (
        <Login
          setUser={setUser}
          setFormName={setFormName}
          formName={formName}
        />
      ) : (
        <Register setFormName={setFormName} formName={formName} />
      )}
    </div>
  );
};

export default Auth;
