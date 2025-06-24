const mongoose = require('mongoose');
const BikeSchema = new mongoose.Schema({
  model: String,
  city: String,
  pickupLocation: String,
  pricePerDay: Number,
});
module.exports = mongoose.model('Bike', BikeSchema);
