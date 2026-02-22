const Property = require("../models/Property");

exports.createProperty = async (req, res) => {
  const property = await Property.create({
    ...req.body,
    ownerId: req.user.id,
  });
  res.json(property);
};

exports.getAllProperties = async (req, res) => {
  const properties = await Property.find().populate("ownerId", "name email");
  res.json(properties);
};

exports.getOwnerProperties = async (req, res) => {
  const properties = await Property.find({ ownerId: req.user.id });
  res.json(properties);
};
