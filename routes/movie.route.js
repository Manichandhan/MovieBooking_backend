const express = require("express");
const {getAllMovies} = require("../Controllers/movies.controller");

const router = express.Router();

router.route("/test").get(getAllMovies);

module.exports = router;
