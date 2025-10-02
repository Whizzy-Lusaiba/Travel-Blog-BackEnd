
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use routes directly (no /api prefix)
app.use('/', require('./routes/posts'));

app.get('/', (req, res) => {
  res.json({ message: 'Simple Blog API Running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
