require("express-async-errors");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

const characters = require("./routes/characters");
const user = require("./routes/user");
const auth = require("./routes/auth");
const error = require("./middlewares/error");

const app = express();

app.use(helmet());
app.use(express.json());

process.on("uncaughtException", (ex) => {
  console.log(ex.message);
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  console.log(ex.message);
  process.exit(1);
});

app.get("/", (req, res) => {
  res.send("API is up and running");
});

app.use("/api/characters", characters);
app.use("/api/user", user);
app.use("/api/auth", auth);

app.use(error);

const port = process.env.PORT || 5000;

mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@db:27017/rickandmorty?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error("FAILED TO CONNECT TO MONGODB");
      console.error(err);
    } else {
      console.log("CONNECTED TO MONGODB!!");
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    }
  }
);
