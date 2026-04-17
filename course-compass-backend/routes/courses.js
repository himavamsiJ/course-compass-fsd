const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// GET all courses with filters
router.get("/", async (req, res) => {
  const { query, language, price, rating } = req.query;

  let filter = {};

  if (query) {
    filter.category = { $regex: query, $options: "i" };
  }

  if (language) {
    filter.language = language;
  }

  if (price) {
    filter.price = price;
  }

  if (rating) {
    filter.rating = { $gte: Number(rating) };
  }

  const courses = await Course.find(filter);
  res.json(courses);
});

module.exports = router;
