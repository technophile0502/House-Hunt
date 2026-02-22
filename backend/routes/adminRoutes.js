const router = require("express").Router();
const { approveOwner } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

router.put("/approve/:id", authMiddleware, approveOwner);

module.exports = router;
