const Subscription = require('../models/Subscription');
exports.createSubscription = async (req, res) => {
  const { userId, durationInMonths, startDate } = req.body;
  const subscription = await Subscription.create({ userId, durationInMonths, startDate });
  res.json(subscription);
};
