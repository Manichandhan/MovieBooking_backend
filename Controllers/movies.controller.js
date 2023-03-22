
const Movie = require("../Model/movies.model");


async function getAllMovies(req, res){
    const result = await Movie.find({});

    res.send(result);
}

module.exports = {
    getAllMovies
}