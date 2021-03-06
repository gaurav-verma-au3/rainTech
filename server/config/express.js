require("dotenv").config();
const path = require("path"),
  express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  authRoutes = require("../routes/authRoutes"),
  movieRoutes = require("../routes/movieRoutes");
cors = require("cors");

module.exports.init = () => {
  //initialize app
  const app = express();

  app.use(cors());

  //morgan used for logging HTTP requests to the console
  app.use(morgan("dev"));

  //bodyParser middleware used for resolving the req and res body objects (urlEncoded and json formats)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //add routers
  app.use("/api/auth", authRoutes);
  app.use("/api", movieRoutes);

  //for production build
  if (process.env.NODE_ENV === "production") {
    //Serve any static files
    app.use(express.static(path.join(__dirname, "../../build")));

    //Handle React routing, return all requests to React app
    app.get(/^\/(?!api).*/, function (req, res) {
      res.sendFile(path.join(__dirname, "../../build", "index.html"));
    });
  }

  return app;
};
