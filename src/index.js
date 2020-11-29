import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./notif.css";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <NotificationContainer />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
