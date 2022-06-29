const express = require("express");
const { pathExists } = require("fs-extra");
const router = express.Router();

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'

// router.post('/juggling-balls', function (req, res) {
// })

router.post("/juggling-balls", function (req, res) {
  console.warn("req.session.data");
  console.warn(req.session.data);
  console.warn("req.path");
  console.warn(req.path);

  let fail = {
    failed: true,
    failedMessage: "it failed"
  }

  if (req.path.includes("juggling-balls")) {
    console.warn(req.session.data["can-you-juggle"]);
    if (req.session.data["can-you-juggle"] == "yes") {
      res.redirect("/juggling-balls");
    } else {
      res.redirect("/ineligible");
    }
  }
});

router.post("/juggling-balls-answer", function (req, res) {
  console.warn("req.session.data");
  console.warn(req.session.data);
  console.warn("req.path");
  console.warn(req.path);

  if (req.path.includes("juggling-balls-answer")) {
    if (req.session.data["how-many-balls"] == "3 or more") {
      res.redirect("/juggling-trick");
    } else {
      res.redirect("/ineligible");
    }
  }
});

module.exports = router;
