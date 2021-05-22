const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config.env" });
const logger = require("morgan");
const fs = require("fs");
const path = require("path");

//////////Routes/////////////////////////////////////
const userRoute = require("./routes/userRoute");
const commentRoute = require("./routes/commentRoute");
const postRoute = require("./routes/postRoute");
//////////////////////////////////////////////////////
const { connectDB } = require("./config/db");
const main = async () => {
  await connectDB();

  const app = express();

  app.use(express.json());
  app.use(logger("dev"));
  app.use(cors());

  //Bodyparser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //create a write stream(in append mode)
  var accessLogStream = fs.createWriteStream(
    path.join(__dirname, "/logs/access.log"),
    { flags: "a" }
  );

  //Serves all the request which includes /images in the url from Images folder
  app.use("/images", express.static(__dirname + "/images"));
  //setup the logger
  app.use(logger("combined", { stream: accessLogStream }));

  app.get("/", (req, res) => {
    res.send("API is running");
  });
  app.use("/api/user", userRoute);
  app.use("/api/comment", commentRoute);
  app.use("/api/post", postRoute);

  const PORT = process.env.PORT || 5000;
  console.log(`Server environment is ${process.env.NODE_ENV}`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
main().catch((err) => {
  console.log(err);
});
