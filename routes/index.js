const express = require("express");
const { route } = require("express/lib/application");
const res = require("express/lib/response");

const router = express.Router();

// @desc    Login/Landing page
// @route   GET /
// res.send("") sends a string
// res.render() looks for the cooresponding view file.hbs

// @desc    Login/Landing page
// @route   GET /
router.get("/", (req, res) => {
  res.render("login");
});

// @desc    Account page
// @route   GET /
router.get("/account", (req, res) => {
  res.render("account");
});

module.exports = router;
