
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, default: 'Admin' },
  tags: [String]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);
