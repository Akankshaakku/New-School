const express = require('express');
const router = express.Router();
const { Gallery } = require('../data/dataStorage');

// Get all gallery items
router.get('/', async (req, res) => {
  try {
    let gallery = await Gallery.findAll();
    
    // Filter by featured if requested
    if (req.query.featured === 'true') {
      gallery = gallery.filter(g => g.featured === true);
    }
    
    // Filter by category if requested
    if (req.query.category) {
      gallery = gallery.filter(g => g.category === req.query.category);
    }
    
    // Sort by createdAt descending
    gallery.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Apply limit if specified
    if (req.query.limit) {
      gallery = gallery.slice(0, parseInt(req.query.limit));
    }
    
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single gallery item
router.get('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create gallery item (admin only)
router.post('/', async (req, res) => {
  try {
    const galleryItem = await Gallery.create(req.body);
    res.status(201).json(galleryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update gallery item (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.update(req.params.id, req.body);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete gallery item (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Gallery.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
