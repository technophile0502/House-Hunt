const Booking = require("../models/Booking");
const Property = require("../models/Property");

exports.createBooking = async (req, res) => {
  const booking = await Booking.create({
    propertyId: req.body.propertyId,
    tenantId: req.user.id,
  });
  res.json(booking);
};

exports.getTenantBookings = async (req, res) => {
  const bookings = await Booking.find({ tenantId: req.user.id })
    .populate("propertyId");
  res.json(bookings);
};

exports.getOwnerBookings = async (req, res) => {
  const properties = await Property.find({ ownerId: req.user.id });

  const propertyIds = properties.map(p => p._id);

  const bookings = await Booking.find({ propertyId: { $in: propertyIds } })
    .populate("propertyId")
    .populate("tenantId", "name email");

  res.json(bookings);
};
