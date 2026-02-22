const User = require("../models/User");

exports.approveOwner = async (req, res) => {
  const user = await User.findById(req.params.id);

  user.isApproved = true;
  await user.save();

  res.json({ message: "Owner approved" });
};
