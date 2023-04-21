const express = require("express");
const morgan = require("morgan");
const path = require("path");
const aboutRouter = require("./routes/about");
const userRouter = require("./routes/user");
const connectDB = require("./db");
require("ejs");

const app = express();

connectDB();

// Settings
app.set("appName", "Express Course");
app.set("port", 4000);
app.set("case sensitive routing", true);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Understand content body
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares introducing
app.use(morgan("dev"));

app.get("/note.txt", (req, res) => {
  res.send("This is not a file from server");
});

app.use(aboutRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  const title = "hello world 2";
  res.render("index", { title });
});

// app.use((req, res, next) => {
//   if (req.query.username === "rojasricor") {
//     return next();
//   }
//   res.send("Unauthorized");
// });

// Normal routes
app.get("/add/:x/:y", ({ params: { x, y } }, res) => {
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
