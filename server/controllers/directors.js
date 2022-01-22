var express = require("express");
var router = express.Router();
var Director = require("../models/director");
var Movie = require("../models/movie");
var Series = require("../models/serie");

router.post("/api/directors", async function (req, res, next) {
  var director = new Director(req.body);
  await director.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).json(director);
  });
});

router.get("/api/directors", async function (req, res, next) {
  await Director.find(function (err, director) {
    if (err) {
      return next(err);
    }
    if (director === null || director.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no directors in the system" });
    }
    res.status(200).json({ directors: director });
  });
});

router.get("/api/directors/:id", async function (req, res, next) {
  var id = req.params.id;
  await Director.findById(id, function (err, director) {
    if (err) {
      return next(err);
    }
    if (director === null) {
      return res.status(404).json({ message: "Director not found" });
    }
    res.status(200).json(director);
  });
});

router.put("/api/directors/:id", async function (req, res, next) {
  var id = req.params.id;
  await Director.findById(id, function (err, director) {
    if (err) {
      return next(err);
    }
    if (director === null) {
      return res.status(404).json({ message: "Director not found" });
    }
    director.fullName = req.body.fullName;
    director.biography = req.body.biography;
    director.image = req.body.image;
    director.save();
    res.status(200).json(director);
  });
});

router.delete("/api/directors/:id", async function (req, res, next) {
  var id = req.params.id;
  await Director.findOneAndDelete({ _id: id }, function (err, director) {
    if (err) {
      return next(err);
    }
    if (director == null) {
      return res.status(404).json({ message: "Director not found" });
    }
    res.status(200).json(director);
  });
});

router.delete("/api/directors", async function (req, res, next) {
  await Director.deleteMany({}, function (err, directors) {
    if (err) {
      return next(err);
    }
    if (directors === null) {
      return res.status(404).json({ message: "Directors not found" });
    }
    res.status(200).json(directors);
  });
});

module.exports = router;
