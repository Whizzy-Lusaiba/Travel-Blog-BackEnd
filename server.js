
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travel-blog')
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.log(' MongoDB connection error:', err));

// Routes
app.use('/api/posts', require('./routes/posts'));

app.get('/', (req, res) => {
  res.json({ message: 'Travel Blog API is running!' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route works!' });
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
