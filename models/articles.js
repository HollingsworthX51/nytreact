const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const article = mongoose.model("articles", bookSchema);

module.exports = articles;
