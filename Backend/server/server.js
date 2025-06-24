const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cities', require('./routes/cityRoutes'));
app.use('/api/bikes', require('./routes/bikeRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/subscriptions', require('./routes/subscriptionRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
