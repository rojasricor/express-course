const axios = require("axios");
const { Router } = require("express");

const router = Router();

router.get("/hello/:username", (req, res) => {
  res.send(`Hello ${req.params.username}`);
});

router.get("/:username/search", (req, res) => {
  res.send(`Query: ${req.query.q}`);
});

router.get("/dashboard", (req, res) => {
  message = "dasasad";

  res.render("dashboard", {
    message,
  });
});

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.render("posts", {
    posts: response.data,
  });
});

module.exports = router;
