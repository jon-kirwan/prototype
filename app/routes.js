var NotifyClient = require("notifications-node-client").NotifyClient,
  notify = new NotifyClient(process.env.NOTIFYAPIKEY);

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
    failedMessage: "it failed",
  };

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

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post("/send-email", function (req, res) {
  notify.sendEmail(
    "a8c0632f-ede8-446c-9c95-00f8ff57128a",
    req.body.emailAddress,
    {
      personalisation: {
        emailAddress: req.body.emailAddress,
      },
    }
  );

  res.redirect("/confirmation");
});

module.exports = router;
