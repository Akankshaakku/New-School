const express = require('express');
const router = express.Router();
const { Event } = require('../data/dataStorage');

// Get all events
router.get('/', async (req, res) => {
  try {
    let events = await Event.findAll();
    
    // Filter by featured if requested
    if (req.query.featured === 'true') {
      events = events.filter(e => e.featured === true);
    }
    
    // Sort by date descending
    events.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Apply limit if specified
    if (req.query.limit) {
      events = events.slice(0, parseInt(req.query.limit));
    }
    
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create event (admin only)
router.post('/', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update event (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const event = await Event.update(req.params.id, req.body);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete event (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Event.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
