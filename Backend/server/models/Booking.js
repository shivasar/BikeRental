const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  bikeId: mongoose.Types.ObjectId,
  city: String,
  userName: String,
  startDate: Date,
  endDate: Date,
  totalPrice: Number,
});
module.exports = mongoose.model('Booking', BookingSchema);
