var mongoose = require("mongoose");
const { Schema } = mongoose;

const directorSchema = new Schema({
  fullName: String,
  biography: String,
  image: String,
});

let Director = mongoose.model("Director", directorSchema);

module.exports = Director;
