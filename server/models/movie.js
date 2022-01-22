var mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: String,
  poster: String,
  genre: String,
  imdbRating: Number,
  description: String,
  duration: Number,
  releaseDate: Date,
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director" },
});

let Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
