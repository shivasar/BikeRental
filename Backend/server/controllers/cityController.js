const City = require('../models/City');
exports.getCities = async (req, res) => {
  const cities = await City.find();
  res.json(cities);
};
