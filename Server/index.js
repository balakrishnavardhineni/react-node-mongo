const express = require("express");
const cors = require("cors");
const db = require("./Db");
const userRouter = require("./ApiRoutes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("hello");
  console.log("hello", req, res);
});

app.use("/api", userRouter);

app.listen(3001, () => {
  console.log("hi");
});
