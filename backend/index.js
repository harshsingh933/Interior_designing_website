const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Allows cross-origin requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
