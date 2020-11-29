const express = require("./config/express.js"),
  mongoose = require("mongoose"),
  port = process.env.PORT || 5000,
  app = express.init();
app.listen(port, () => console.log(`Server now running on port ${port}!`));

//connect to db
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected");
});
connection.on("error", (error) => console.log("Error: " + error));
