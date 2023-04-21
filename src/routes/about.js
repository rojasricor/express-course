const { Router } = require("express");

const router = Router();

// All methods
router.all("/about", (req, res) => {
  res.render("about", {
    message: "Acerca de",
  });
});

module.exports = router;
