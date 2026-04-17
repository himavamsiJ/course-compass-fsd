const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  category: String,     // Python, Java, Web Dev, AI, etc.
  platform: String,
  language: String,
  rating: Number,
  price: String,        // Free / Paid
  link: String,
  popularity: Number
});

module.exports = mongoose.model("Course", CourseSchema);
