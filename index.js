const express = require("express");
const morgan = require("morgan");

const app = express();

// Understand content body
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares introducing
app.use(morgan("dev"));

// All methods
app.all("/info", (req, res) => {
  res.send("server information");
});

app.use((req, res, next) => {
  if (req.query.username === "rojasricor") {
    return next();
  }
  res.send("Unauthorized");
});

// Normal routes
app.get("/hello/:username", (req, res) => {
  res.send(`Hello ${req.params.username}`);
});

app.get("/add/:x/:y", ({ params: { x, y } }, res) => {
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/:username/search", (req, res) => {
  res.send(`Query: ${req.query.q}`);
});

app.listen(8000);
console.log("Server on port 8000 time: 02:04:20");
