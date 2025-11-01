const express = require('express');
const router = express.Router();
const { Faculty } = require('../data/dataStorage');

// Get all faculty
router.get('/', async (req, res) => {
  try {
    let faculty = await Faculty.findAll();
    
    // Filter by featured if requested
    if (req.query.featured === 'true') {
      faculty = faculty.filter(f => f.featured === true);
    }
    
    // Sort by createdAt descending
    faculty.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Apply limit if specified
    if (req.query.limit) {
      faculty = faculty.slice(0, parseInt(req.query.limit));
    }
    
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single faculty member
router.get('/:id', async (req, res) => {
  try {
    const facultyMember = await Faculty.findById(req.params.id);
    if (!facultyMember) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json(facultyMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create faculty member (admin only)
router.post('/', async (req, res) => {
  try {
    const facultyMember = await Faculty.create(req.body);
    res.status(201).json(facultyMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update faculty member (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const facultyMember = await Faculty.update(req.params.id, req.body);
    if (!facultyMember) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json(facultyMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete faculty member (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Faculty.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json({ message: 'Faculty member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
