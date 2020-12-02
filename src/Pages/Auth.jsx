import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { Link } from "react-router-dom";

const Auth = ({ setUser, formName, setFormName }) => {
  return (
    <div>
      <div className="container-fluid m-0 p-0 d-flex justify-content-center align-items-center">
        <img
          src="https://i.ibb.co/wWRVPnN/IN-en-20201123-popsignuptwoweeks-perspective-alpha-website-small.jpg"
          style={{
            objectFit: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0px",
            left: "0px",
            zIndex: "-10",
          }}
          alt="hero"
        />
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "black",
            opacity: "0.6",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-5",
          }}
        ></div>
        {formName === "" ? (
          <div className="text-light text-center" style={{ marginTop: "25vh" }}>
            <h1 style={{ fontSize: "3.2rem", maxWidth: "500px" }}>
              Unlimited movies, TV shows and more.
            </h1>
            <h5 style={{ fontSize: "1.5rem" }}>
              Watch anywhere. Cancel anytime.
            </h5>
          </div>
        ) : formName === "login" ? (
          <Login
            setUser={setUser}
            setFormName={setFormName}
            formName={formName}
          />
        ) : (
          <Register setFormName={setFormName} formName={formName} />
        )}
      </div>
    </div>
  );
};

export default Auth;
