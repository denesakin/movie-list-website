var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");
var Director = require("../models/director");

router.post("/api/movies", async function (req, res, next) {
  var movie = new Movie(req.body);
  await movie.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).json(movie);
  });
});

router.post("/api/directors/:id/movies", async function (req, res, next) {
  var director_id = req.params.id;
  var new_movie = new Movie(req.body);

  new_movie.director = director_id;
  await new_movie.save(function (err) {
    if (err) return next(err);
  });
  res.status(201).json(new_movie);
});

router.get("/api/movies", async function (req, res, next) {
  await Movie.find(function (err, movie) {
    if (err) {
      return next(err);
    }
    if (movie === null || movie.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no movies in the system" });
    }
    res.status(200).json({ movies: movie });
  });
});

router.get("/api/movies/:id", async function (req, res, next) {
  var id = req.params.id;
  await Movie.findById(id, function (err, movie) {
    if (err) {
      return next(err);
    }
    if (movie === null) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  });
});

router.get("/api/movies/:movieName/ids", async function (req, res, next) {
  await Movie.find({ name: req.params.movieName }, function (err, movie) {
    if (err) {
      return next(err);
    }
    if (movie === null || movie.length === 0) {
      return res
        .status(404)
        .json({ message: "No matching movies" });
    }
    res.status(200).json({ movies: movie });
  });
});

router.get("/api/directors/:id/movies", async function (req, res, next) {
  var director_id = req.params.id;

  await Movie.find({ director: director_id }, function (err, movies) {
    if (err) return next(err);

    if (movies.length === 0) {
      return res.status(404).json({ message: "Movies not found" });
    }

    res.status(200).json({ movies: movies });
  });
});

router.put("/api/movies/:id", async function (req, res, next) {
  var id = req.params.id;
  await Movie.findById(id, function (err, movie) {
    if (err) {
      return next(err);
    }
    if (movie === null) {
      return res.status(404).json({ message: "Movie not found" });
    }
    movie.name = req.body.name || movie.name;
    movie.poster = req.body.poster || movie.poster;
    movie.genre = req.body.genre || movie.genre;
    movie.imdbRating = req.body.imdbRating || movie.imdbRating;
    movie.description = req.body.description || movie.description;
    movie.duration = req.body.duration || movie.duration;
    movie.releaseDate = req.body.releaseDate || movie.releaseDate;
    movie.director = req.body.director || movie.director;
    movie.save();
    res.status(200).json(movie);
  });
});

router.delete("/api/movies/:id", async function (req, res, next) {
  var id = req.params.id;
  await Movie.findOneAndDelete({ _id: id }, function (err, movie) {
    if (err) {
      return next(err);
    }
    console.log(movie);
    if (movie === null) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  });
});

router.delete("/api/movies", async function (req, res, next) {
  await Movie.deleteMany({}, function (err, movies) {
    if (err) {
      return next(err);
    }
    if (movies === null) {
      return res.status(404).json({ message: "Movies not found" });
    }
    res.status(200).json(movies);
  });
});

module.exports = router;
