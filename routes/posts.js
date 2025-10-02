
const express = require('express');
const router = express.Router();

// Test route - works without database
router.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Posts route is working!',
    timestamp: new Date().toISOString()
  });
});

// Get sample posts - works without database
router.get('/', (req, res) => {
  const samplePosts = [
    {
      id: 1,
      title: 'Beautiful Beaches of Bali',
      excerpt: 'Discover the most stunning beaches in Bali',
      author: 'Travel Explorer',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500'
    },
    {
      id: 2,
      title: 'Mountain Hiking in Nepal',
      excerpt: 'Adventure through the Himalayas',
      author: 'Mountain Lover', 
      image: 'https://images.unsplash.com/photo-1464822759844-2c5e2b3b49d3?w=500'
    }
  ];

  res.json({
    success: true,
    message: 'Sample travel posts',
    data: samplePosts,
    count: samplePosts.length
  });
});

module.exports = router;
