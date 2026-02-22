const router = require("express").Router();
const {
  createBooking,
  getTenantBookings,
  getOwnerBookings,
} = require("../controllers/bookingController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createBooking);
router.get("/tenant", authMiddleware, getTenantBookings);
router.get("/owner", authMiddleware, getOwnerBookings);

module.exports = router;

