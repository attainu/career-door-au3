"use strict";
const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sequelize = require("sequelize");
const passport = require("passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");
const profileRouter = require("./routes/profileRouter");
const reviewRouter = require("./routes/reviewRouter");
const cors = require("cors");
// const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fileupload = require("express-fileupload");

const app = express();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(cors());
app.use(logger("dev"));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// passport config
app.use(passport.initialize());
// passport config
require("./config/passport")(passport);

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/files", express.static("files"));

// upload files
app.use(
  fileupload({
    useTempFiles: true
  })
);

const userRoute = require("./routes/userRoutes");
app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);
app.use("/api/profile", profileRouter);
app.use("/api/user", userRoute);
app.use("/api/review", reviewRouter);

// aceess control origin
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
