var express = require("express");
var router = express.Router();
var Series = require("../models/serie");

router.post("/api/series", async function (req, res, next) {
  var serie = new Series(req.body);
  await serie.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).json(serie);
  });
});

router.get("/api/series", async function (req, res, next) {
  await Series.find(function (err, series) {
    if (err) {
      return next(err);
    }
    if (series === null || series.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no series in the system" });
    }
    res.status(200).json({ series: series });
  });
});

router.get("/api/series/:id", async function (req, res, next) {
  var id = req.params.id;
  await Series.findById(id, function (err, series) {
    if (err) {
      return next(err);
    }
    if (series === null) {
      return res.status(404).json({ message: "Series not found" });
    }
    res.status(200).json(series);
  });
});

router.get("/api/series/:serieName/ids", async function (req, res, next) {
  await Series.find({ name: req.params.serieName }, function (err, series) {
    if (err) {
      return next(err);
    }
    if (series === null || series.length === 0) {
      return res
        .status(404)
        .json({ message: "No matching series" });
    }
    res.status(200).json({ series: series });
  });
});

router.put("/api/series/:id", async function (req, res, next) {
  var id = req.params.id;
  await Series.findById(id, function (err, series) {
    if (err) {
      return next(err);
    }
    if (series === null) {
      return res.status(404).json({ message: "Serie not found" });
    }
    series.name = req.body.name || series.name;
    series.genre = req.body.genre || series.genre;
    series.poster = req.body.poster || series.poster;
    series.imdbRating = req.body.imdbRating || series.imdbRating;
    series.seasons = req.body.seasons || series.seasons;
    series.description = req.body.description || series.description;
    series.releaseDate = req.body.releaseDate || series.releaseDate;
    series.director = req.body.director || series.director;
    series.save();
    res.status(200).json(series);
  });
});

router.delete("/api/series/:id", async function (req, res, next) {
  var id = req.params.id;
  await Series.findOneAndDelete({ _id: id }, function (err, series) {
    if (err) {
      return next(err);
    }
    if (series === null) {
      return res.status(404).json({ message: "Serie not found" });
    }
    res.status(200).json(series);
  });
});

router.delete("/api/series", async function (req, res, next) {
  await Series.deleteMany({}, function (err, series) {
    if (err) {
      return next(err);
    }
    if (series === null) {
      return res.status(404).json({ message: "Series not found" });
    }
    res.status(200).json(series);
  });
});

module.exports = router;
