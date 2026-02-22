const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Get single property
router.get("/:id", async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.json(property);
});

// Add property
router.post("/", async (req, res) => {
  const newProperty = new Property(req.body);
  await newProperty.save();
  res.json(newProperty);
});

module.exports = router;
