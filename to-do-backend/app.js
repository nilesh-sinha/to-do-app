const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const ackRouter = require("./routes/ack");
const todoRouter = require("./routes/todo");
const port = process.env.port || 2000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", ackRouter);
app.use("/user", usersRouter);
app.use("/todo", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const uri = // mongodb+srv://ROOT:<password>@cluster0.ijmjw.mongodb.net/<dbname>?retryWrites=true&w=majority
  "mongodb+srv://ROOT:R00tUs3r@cluster0.ijmjw.mongodb.net/ActionsList?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection opened.");
});
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
module.exports = app;
