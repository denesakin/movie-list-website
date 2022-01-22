var mongoose = require("mongoose");
const { Schema } = mongoose;

const seriesSchema = new Schema({
  name: String,
  poster: String,
  genre: String,
  imdbRating: Number,
  description: String,
  seasons: Number,
  releaseDate: Date,
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director" },
});

let Series = mongoose.model("Series", seriesSchema);
module.exports = Series;
