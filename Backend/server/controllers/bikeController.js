const Bike = require('../models/Bike');
exports.getBikesByCity = async (req, res) => {
  const { city } = req.params;
  const bikes = await Bike.find({ city });
  res.json(bikes);
};
