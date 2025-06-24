const Booking = require('../models/Booking');
const calculatePrice = require('../utils/calculatePrice');

exports.createBooking = async (req, res) => {
  const { bikeId, city, startDate, endDate, userName } = req.body;
  const totalPrice = await calculatePrice(bikeId, startDate, endDate);
  const booking = await Booking.create({
    bikeId, city, userName, startDate, endDate, totalPrice
  });
  res.json(booking);
};
