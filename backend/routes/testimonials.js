const express = require('express');
const router = express.Router();
const { Testimonial } = require('../data/dataStorage');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    let testimonials = await Testimonial.findAll();
    
    // Filter by featured if requested
    if (req.query.featured === 'true') {
      testimonials = testimonials.filter(t => t.featured === true);
    }
    
    // Sort by createdAt descending
    testimonials.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Apply limit if specified
    if (req.query.limit) {
      testimonials = testimonials.slice(0, parseInt(req.query.limit));
    }
    
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single testimonial
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create testimonial (admin only)
router.post('/', async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update testimonial (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.update(req.params.id, req.body);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete testimonial (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Testimonial.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
