const mongoose = require('mongoose');
const SubscriptionSchema = new mongoose.Schema({
  userId: String,
  durationInMonths: Number,
  startDate: Date,
});
module.exports = mongoose.model('Subscription', SubscriptionSchema);
