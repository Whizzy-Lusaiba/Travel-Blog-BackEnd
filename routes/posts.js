const express = require('express');
const router = express.Router();

// GET post-categories - like the example     
router.get('/posts/post-categories', (req, res) => {
  const categories = [
    { id: 1, name: 'Adventure Travel' },      
    { id: 2, name: 'Cultural Experiences' },  
    { id: 3, name: 'Food & Cuisine' },        
    { id: 4, name: 'Solo Travel' }
  ];
  res.json(categories);
});

// GET post-list - like the example
router.get('/posts/post-list/:categoryId', (req, res) => {
  const posts = [
    { id: 1, title: 'Hiking the Inca Trail', content: 'Amazing adventure...' },
    { id: 2, title: 'Bali Beach Guide', content: 'Best beaches in Bali...' }
  ];
  res.json(posts);
});

// GET post-newest - like the example
router.get('/posts/post-newest', (req, res) => {
  const newestPosts = [
    { id: 1, title: 'Latest Travel Tips', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500' },    
    { id: 2, title: 'New Destination Guide', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500' }  
  ];
  res.json(newestPosts);
});

// GET post-details/:id - EXACTLY like the example
router.get('/posts/post-details/:id', (req, res) => {
  const postId = req.params.id;
  const postDetails = {
    id: postId,
    title: "Hiking the Inca Trail to Machu Picchu",
    content: "The Inca Trail to Machu Picchu is more than just a hike - it's a journey through history...",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
    category: "Adventure Travel",
    author: "Travel Explorer",
    created_at: "2024-01-15"
  };
  res.json({ postDetails: postDetails });
});

module.exports = router;